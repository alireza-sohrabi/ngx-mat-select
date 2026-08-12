import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

const outputRoot = resolve(import.meta.dirname, '../dist/demo/browser');
const baseIndexPath = resolve(outputRoot, 'index.html');
const siteUrl = 'https://alireza-sohrabi.github.io/ngx-mat-select';

const pages = [
  {
    path: '',
    title: 'ngx-mat-select | Searchable Virtual Angular Material Select',
    description: 'Searchable, virtualized Angular Material select for large local or remote datasets, with server-side filtering, infinite scroll, and multiple selection.',
    heading: 'Searchable and virtualized Angular Material select',
    body: 'Select from thousands of local or remote options with built-in search, CDK virtual scrolling, server-side filtering, infinite pagination, Angular forms, and mobile views.',
  },
  {
    path: 'introduction',
    canonicalPath: '',
    title: 'ngx-mat-select | Searchable Virtual Angular Material Select',
    description: 'Searchable, virtualized Angular Material select for large local or remote datasets, with server-side filtering and infinite scroll.',
    heading: 'Searchable and virtualized Angular Material select',
    body: 'A complete Angular Material select for responsive local search, remote filtering, infinite pagination, and large option lists.',
  },
  {
    path: 'quick-start',
    title: 'Install ngx-mat-select | Angular Material Select',
    description: 'Install and configure ngx-mat-select for searchable, virtualized Angular Material select controls.',
    heading: 'Install ngx-mat-select',
    body: 'Install the package, include its Angular Material theme, import NgxMatSelectModule, and connect the select to Angular forms.',
  },
  {
    path: 'client-side',
    title: 'Client-side Search and Virtual Scroll | ngx-mat-select',
    description: 'Build searchable Angular Material selects with virtual scrolling for large client-side datasets.',
    heading: 'Client-side search and virtual scrolling',
    body: 'Filter large in-memory arrays while rendering only visible options. Learn object identity, primitive values, forms, lazy initialization, and custom matching.',
  },
  {
    path: 'server-side',
    title: 'Server-side Filtering and Infinite Scroll | ngx-mat-select',
    description: 'Load, search, filter, and infinitely scroll remote Angular Material select options with ngx-mat-select.',
    heading: 'Server-side search and infinite scroll',
    body: 'Query a remote API as users type, fetch results page by page, retry failed requests, and preserve preselected values.',
  },
  {
    path: 'accessibility',
    title: 'Accessible Angular Material Select | ngx-mat-select',
    description: 'Keyboard commands, screen-reader semantics, labels, and accessible loading, empty, and error states in ngx-mat-select.',
    heading: 'Accessibility and keyboard support',
    body: 'Use connected combobox and listbox semantics, contextual labels, keyboard navigation, and announced loading, empty, and error states.',
  },
  {
    path: 'dark-theme',
    title: 'Angular Material Select Dark Theme | ngx-mat-select',
    description: 'Theme ngx-mat-select for light and dark Angular Material applications using Sass mixins.',
    heading: 'Light and dark Angular Material themes',
    body: 'Apply the ngx-mat-select Sass theme and typography mixins alongside the application’s Angular Material theme.',
  },
  {
    path: 'version-compatibility',
    title: 'Angular Version Compatibility | ngx-mat-select',
    description: 'Find compatible ngx-mat-select, Angular, Angular Material, and Angular CDK versions.',
    heading: 'Angular version compatibility',
    body: 'Choose the ngx-mat-select package major that matches the Angular and Angular Material version used by your application.',
  },
  {
    path: 'other-examples/customize',
    title: 'Customize Angular Material Select | ngx-mat-select',
    description: 'Customize option templates, triggers, panels, dimensions, mobile views, and global ngx-mat-select defaults.',
    heading: 'Customize ngx-mat-select',
    body: 'Configure dimensions, panel classes, custom option content, custom triggers, global defaults, and mobile presentation modes.',
  },
  {
    path: 'api',
    title: 'ngx-mat-select API Reference',
    description: 'Inputs, outputs, directives, configuration, and public TypeScript types for ngx-mat-select.',
    heading: 'ngx-mat-select API reference',
    body: 'Browse the public Angular component, directives, configuration token, inputs, outputs, events, and TypeScript types.',
  },
];

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const renderPage = (source, page) => {
  const canonicalPath = page.canonicalPath ?? page.path;
  const canonicalUrl = `${siteUrl}${canonicalPath ? `/${canonicalPath}` : ''}/`;
  const staticContent = `<main class="seo-prerender" data-prerendered="true"><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.body)}</p><p><a href="${siteUrl}/quick-start/">Install ngx-mat-select</a> · <a href="${siteUrl}/client-side/">Client-side guide</a> · <a href="${siteUrl}/server-side/">Server-side guide</a> · <a href="https://www.npmjs.com/package/ngx-mat-select">npm package</a></p></main>`;

  return source
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${escapeHtml(page.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${escapeHtml(page.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${escapeHtml(page.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${canonicalUrl}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${escapeHtml(page.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${escapeHtml(page.description)}$2`)
    .replace('<app-root></app-root>', `<app-root>${staticContent}</app-root>`);
};

const baseIndex = readFileSync(baseIndexPath, 'utf8');

for (const page of pages) {
  const target = page.path
    ? resolve(outputRoot, page.path, 'index.html')
    : baseIndexPath;
  mkdirSync(dirname(target), {recursive: true});
  writeFileSync(target, renderPage(baseIndex, page));
}

writeFileSync(resolve(outputRoot, '404.html'), baseIndex);
console.log(`Prerendered ${pages.length} crawlable documentation pages.`);
