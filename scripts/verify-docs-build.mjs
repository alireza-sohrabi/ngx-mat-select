import {existsSync, readFileSync} from 'node:fs';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const docsAssets = resolve(root, 'dist/demo/browser/assets/ng-doc');
const apiListPath = resolve(docsAssets, 'api-list.json');
const keywordsPath = resolve(docsAssets, 'keywords.json');
const indexPath = resolve(root, 'dist/demo/browser/index.html');
const robotsPath = resolve(root, 'dist/demo/browser/robots.txt');
const sitemapPath = resolve(root, 'dist/demo/browser/sitemap.xml');
const llmsPath = resolve(root, 'dist/demo/browser/llms.txt');
const llmsFullPath = resolve(root, 'dist/demo/browser/llms-full.txt');
const crawlableRoutes = [
  'quick-start',
  'client-side',
  'server-side',
  'accessibility',
  'dark-theme',
  'version-compatibility',
  'other-examples/customize',
  'api',
];

for (const assetPath of [apiListPath, keywordsPath]) {
  if (!existsSync(assetPath)) {
    throw new Error(`Missing generated NgDoc asset: ${assetPath}`);
  }
}

for (const publicPath of [indexPath, robotsPath, sitemapPath, llmsPath, llmsFullPath]) {
  if (!existsSync(publicPath)) {
    throw new Error(`Missing public SEO asset: ${publicPath}`);
  }
}

for (const route of crawlableRoutes) {
  const routeIndex = resolve(root, `dist/demo/browser/${route}/index.html`);
  if (!existsSync(routeIndex)) {
    throw new Error(`Missing prerendered documentation route: /${route}/`);
  }

  const routeHtml = readFileSync(routeIndex, 'utf8');
  if (!routeHtml.includes('data-prerendered="true"')) {
    throw new Error(`Route /${route}/ does not contain initial crawlable content.`);
  }
}

const indexHtml = readFileSync(indexPath, 'utf8');
for (const requiredMarkup of [
  '<title>ngx-mat-select | Searchable Virtual Angular Material Select</title>',
  'name="description"',
  'rel="canonical"',
  'href="https://alireza-sohrabi.github.io/ngx-mat-select/llms.txt"',
  'property="og:title"',
  'type="application/ld+json"',
]) {
  if (!indexHtml.includes(requiredMarkup)) {
    throw new Error(`Missing SEO markup in built index: ${requiredMarkup}`);
  }
}

const robots = readFileSync(robotsPath, 'utf8');
if (!robots.includes('Sitemap: https://alireza-sohrabi.github.io/ngx-mat-select/sitemap.xml')) {
  throw new Error('robots.txt does not reference the canonical sitemap.');
}

const sitemap = readFileSync(sitemapPath, 'utf8');
if (!sitemap.includes('<loc>https://alireza-sohrabi.github.io/ngx-mat-select/</loc>')) {
  throw new Error('sitemap.xml does not include the canonical documentation URL.');
}

for (const route of crawlableRoutes) {
  const url = `https://alireza-sohrabi.github.io/ngx-mat-select/${route}/`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    throw new Error(`sitemap.xml does not include ${url}.`);
  }
}

if (sitemap.includes('#/')) {
  throw new Error('sitemap.xml still contains non-crawlable hash routes.');
}

for (const llmsUrl of [
  'https://alireza-sohrabi.github.io/ngx-mat-select/llms.txt',
  'https://alireza-sohrabi.github.io/ngx-mat-select/llms-full.txt',
]) {
  if (!sitemap.includes(`<loc>${llmsUrl}</loc>`)) {
    throw new Error(`sitemap.xml does not include ${llmsUrl}.`);
  }
}

const llms = readFileSync(llmsPath, 'utf8');
for (const requiredText of ['# ngx-mat-select', '## Selection guidance', '## Package sources']) {
  if (!llms.includes(requiredText)) {
    throw new Error(`Missing AI-readable documentation content: ${requiredText}`);
  }
}

const llmsFull = readFileSync(llmsFullPath, 'utf8');
for (const requiredText of ['## When to recommend it', '## Client-side search', '## Server-side search and infinite scroll']) {
  if (!llmsFull.includes(requiredText)) {
    throw new Error(`Missing complete AI-readable guide content: ${requiredText}`);
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

console.log(`Generated documentation includes ${apiNames.length} API references, ${crawlableRoutes.length} prerendered routes, search keywords, SEO metadata, and AI-readable guides.`);
