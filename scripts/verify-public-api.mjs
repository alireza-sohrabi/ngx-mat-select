import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const packageRootIndex = process.argv.indexOf('--package-root');
if (packageRootIndex >= 0 && !process.argv[packageRootIndex + 1]) {
  throw new Error('--package-root requires a path.');
}
const root = packageRootIndex >= 0
  ? resolve(process.argv[packageRootIndex + 1])
  : resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist/ngx-mat-select');
const packageJson = JSON.parse(readFileSync(resolve(dist, 'package.json'), 'utf8'));
const typesPath = resolve(dist, packageJson.exports['.'].types);
function readDeclarations(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = resolve(directory, entry.name);
    if (entry.isDirectory()) return readDeclarations(entryPath);
    return entry.name.endsWith('.d.ts') ? [readFileSync(entryPath, 'utf8')] : [];
  });
}

const declarations = [readFileSync(typesPath, 'utf8'), ...readDeclarations(dist)].join('\n');
const bundle = readFileSync(resolve(dist, packageJson.exports['.'].default), 'utf8');

const exports = [
  'NgxMatSelectComponent',
  'NgxMatSelectModule',
  'NgxMatSelectFetchOptionsClientSideDirective',
  'NgxMatSelectFetchOptionsServerSideDirective',
  'NgxMatSelectOptionContentDirective',
  'NgxMatSelectTriggerDirective',
  'NGX_MAT_SELECT_CONFIG',
  'NgxMatSelectConfig',
  'NgxMatSelectMultipleDisplay',
  'NgxMatSelectOptionType',
  'NgxMatSelectSearchBoxConfigs',
  'NgxMatSelectSearchParams',
  'NgxMatSelectValue',
  'NgxMatSelectViewType',
  'NgxMatSelectionChangeEvent',
];

const selectors = [
  'ngx-mat-select',
  'ngx-mat-select[clientSide]:not(ngx-mat-select[serverSide])',
  'ngx-mat-select[serverSide]:not(ngx-mat-select[clientSide])',
  '[ngxMatSelectOptionContent]',
  '[ngxMatSelectTrigger]',
];

for (const name of exports) {
  if (!new RegExp(`\\b${name}\\b`).test(declarations)) {
    throw new Error(`Missing public TypeScript export: ${name}`);
  }
}

for (const selector of selectors) {
  if (!bundle.includes(selector)) {
    throw new Error(`Missing public selector: ${selector}`);
  }
}

if (packageJson.exports['.'].sass !== './index.scss') {
  throw new Error('The package Sass export no longer resolves to index.scss');
}
if (!existsSync(resolve(dist, 'index.scss')) || !existsSync(resolve(dist, '_select-theme.scss'))) {
  throw new Error('A public Sass compatibility entry point is missing');
}
if (!readFileSync(resolve(dist, 'index.scss'), 'utf8').includes('@forward')) {
  throw new Error('index.scss no longer forwards the select theme');
}

console.log('Public TypeScript, selector, and Sass API matches the Angular 16 baseline.');
