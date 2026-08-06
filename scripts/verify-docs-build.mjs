import {existsSync, readFileSync} from 'node:fs';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const docsAssets = resolve(root, 'dist/demo/browser/assets/ng-doc');
const apiListPath = resolve(docsAssets, 'api-list.json');
const keywordsPath = resolve(docsAssets, 'keywords.json');

for (const assetPath of [apiListPath, keywordsPath]) {
  if (!existsSync(assetPath)) {
    throw new Error(`Missing generated NgDoc asset: ${assetPath}`);
  }
}

const apiList = JSON.parse(readFileSync(apiListPath, 'utf8'));
const apiNames = apiList.flatMap((scope) => scope.items).map((item) => item.name);

for (const requiredName of [
  'NgxMatSelectComponent',
  'NgxMatSelectModule',
  'NgxMatSelectConfig',
]) {
  if (!apiNames.includes(requiredName)) {
    throw new Error(`Missing generated API reference: ${requiredName}`);
  }
}

console.log(`Generated documentation includes ${apiNames.length} API references and search keywords.`);
