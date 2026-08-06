import {existsSync, readFileSync} from 'node:fs';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const docsAssets = resolve(root, 'dist/demo/browser/assets/ng-doc');
const apiListPath = resolve(docsAssets, 'api-list.json');
const keywordsPath = resolve(docsAssets, 'keywords.json');
const indexPath = resolve(root, 'dist/demo/browser/index.html');
const robotsPath = resolve(root, 'dist/demo/browser/robots.txt');
const sitemapPath = resolve(root, 'dist/demo/browser/sitemap.xml');

for (const assetPath of [apiListPath, keywordsPath]) {
  if (!existsSync(assetPath)) {
    throw new Error(`Missing generated NgDoc asset: ${assetPath}`);
  }
}

for (const publicPath of [indexPath, robotsPath, sitemapPath]) {
  if (!existsSync(publicPath)) {
    throw new Error(`Missing public SEO asset: ${publicPath}`);
  }
}

const indexHtml = readFileSync(indexPath, 'utf8');
for (const requiredMarkup of [
  '<title>ngx-mat-select | Searchable Virtual Angular Material Select</title>',
  'name="description"',
  'rel="canonical"',
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

console.log(`Generated documentation includes ${apiNames.length} API references, search keywords, and verified SEO metadata.`);
