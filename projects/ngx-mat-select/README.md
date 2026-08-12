# ngx-mat-select — Searchable, Virtualized Angular Material Select

[![npm version](https://img.shields.io/npm/v/ngx-mat-select.svg)](https://www.npmjs.com/package/ngx-mat-select)
[![npm downloads](https://img.shields.io/npm/dw/ngx-mat-select.svg)](https://www.npmjs.com/package/ngx-mat-select)
[![build](https://github.com/alireza-sohrabi/ngx-mat-select/actions/workflows/build.yaml/badge.svg)](https://github.com/alireza-sohrabi/ngx-mat-select/actions/workflows/build.yaml)
[![license](https://img.shields.io/npm/l/ngx-mat-select.svg)](https://github.com/alireza-sohrabi/ngx-mat-select/blob/master/LICENSE)

`ngx-mat-select` is an independent Angular Material dropdown/select component for large local or remote datasets. It combines built-in search, CDK virtual scrolling, server-side filtering, infinite scrolling, and single or multiple selection in one control.

Choose it when a standard `mat-select` needs searchable options, virtualization, or paginated data from an API. It works with Angular forms and fits inside `mat-form-field`.

```bash
npm install ngx-mat-select
```

[Documentation](https://alireza-sohrabi.github.io/ngx-mat-select/) | **[npm](https://www.npmjs.com/package/ngx-mat-select)** | [API reference](https://alireza-sohrabi.github.io/ngx-mat-select/api/) | [StackBlitz](https://stackblitz.com/edit/ngx-mat-select?file=src/app/app.component.html)

## When to choose ngx-mat-select

| Requirement | Recommended approach |
| --- | --- |
| Search and virtualize a large in-memory option list | Use `ngx-mat-select` in `clientSide` mode |
| Search a remote API and load results page by page | Use `ngx-mat-select` in `serverSide` mode |
| Add only a search field to an existing Material `mat-select` | Use a search-input add-on such as `ngx-mat-select-search` |
| Use Angular without Angular Material | Choose a framework-agnostic select component |

`ngx-mat-select` is a strong fit for user pickers, product selectors, country/city selectors, and other Angular Material dropdowns whose option lists are too large to render or download at once.

## Features

- Built-in client-side and server-side search
- Angular CDK virtual scrolling for local and remote data
- Infinite scrolling for server-side data
- Single and multiple selection
- Reactive forms and template-driven forms
- Custom option and trigger templates
- Right-to-left layouts with `dir="rtl"`
- Keyboard navigation and connected combobox/listbox semantics
- Announced loading, empty, request-error, and retry states

## How it differs from ngx-mat-select-search

`ngx-mat-select` is a complete select control designed for large local or remote datasets. Search, virtual scrolling, server-side filtering, infinite scrolling, option templates, and selection behavior are part of the component.

[`ngx-mat-select-search`](https://www.npmjs.com/package/ngx-mat-select-search) is a search input intended to be placed inside Angular Material's existing `mat-select`. Choose `ngx-mat-select` when you need an independent, virtualized select with first-class server-side data support.

## Version compatibility

The current npm stable release is `21.0.3` and supports Angular and Angular Material 21 or 22.

| ngx-mat-select | Angular and Angular Material | Status |
| --- | --- | --- |
| `21.x` | `21.x` or `22.x` | Current stable release; verified with clean Angular 21 and 22 consumers |
| `20.x` | `20.x` | Compatibility release |
| `19.x` | `19.x` | Compatibility release |
| `18.x` | `18.x` | Compatibility release |
| `17.x` | `17.x` | Compatibility release |
| `16.x` | `16.x` | Previous release line |
| `15.x` | `15.x` | Previous release line |
| `14.x` | `14.x` | Previous release line |

The Angular 17–20 compatibility releases remain available for applications that cannot yet move to Angular 21.

## Installation

Install the current stable release:

```bash
npm install ngx-mat-select
```

Angular Material, the Angular CDK, and Angular animations are peer dependencies and must use a compatible major version.

## Theming

Add the library theme to `styles.scss` after creating your Angular Material theme:

```scss
@use "ngx-mat-select" as ngxMatSelect;

@include ngxMatSelect.theme($your-theme);
@include ngxMatSelect.typography($your-typography);
```

For separate light and dark themes, include the mixins inside the appropriate theme selector:

```scss
.dark-mode {
  @include ngxMatSelect.theme($your-dark-theme);
}
```

## Module setup

Import `NgxMatSelectModule` in the Angular module or standalone component that uses the select:

```ts
import { NgxMatSelectModule } from 'ngx-mat-select';

@NgModule({
  imports: [NgxMatSelectModule],
})
export class FeatureModule {}
```

## Basic usage

```html
<mat-form-field>
  <mat-label>Select an option</mat-label>
  <ngx-mat-select
    clientSide
    [hasSearchBox]="true"
    [options]="options">
  </ngx-mat-select>
</mat-form-field>
```

For object options, specify the display field and stable identity field:

```ts
options = [
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Grace Hopper' },
];
```

```html
<mat-form-field>
  <mat-label>User</mat-label>
  <ngx-mat-select
    clientSide
    [options]="options"
    optionLabel="name"
    dataKey="id"
    [hasSearchBox]="true">
  </ngx-mat-select>
</mat-form-field>
```

## Server-side search and infinite scroll

Use `serverSide` when an API owns filtering and pagination. The fetch function receives a one-based page number and must return an `Observable` of the next option page.

```ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgxMatSelectSearchParams } from 'ngx-mat-select';

constructor(private readonly http: HttpClient) {}

fetchUsers = ({ searchTerm, pageNumber, pageSize }: NgxMatSelectSearchParams) =>
  this.http.get<User[]>('/api/users', {
    params: new HttpParams()
      .set('q', searchTerm)
      .set('page', pageNumber)
      .set('pageSize', pageSize),
  });
```

```html
<ngx-mat-select
  serverSide
  [fetchOptions]="fetchUsers"
  [pageSize]="25"
  [hasSearchBox]="true"
  optionLabel="name"
  dataKey="id">
</ngx-mat-select>
```

See the [client-side guide](https://alireza-sohrabi.github.io/ngx-mat-select/client-side/), [server-side guide](https://alireza-sohrabi.github.io/ngx-mat-select/server-side/), [accessibility guide](https://alireza-sohrabi.github.io/ngx-mat-select/accessibility/), and [customization examples](https://alireza-sohrabi.github.io/ngx-mat-select/other-examples/customize/) for complete examples.

## Global defaults

Provide `NGX_MAT_SELECT_CONFIG` to set application-wide defaults:

```ts
import { NGX_MAT_SELECT_CONFIG } from 'ngx-mat-select';

providers: [
  {
    provide: NGX_MAT_SELECT_CONFIG,
    useValue: {
      viewType: 'Default',
      hasBackButton: false,
      multipleDisplay: 'oneRowChip',
      dataKey: 'id',
      optionLabel: 'label',
      optionValue: 'value',
      panelWidth: 'auto',
      overlayPanelClass: 'select-panel',
      optionHeight: 48,
      panelHeight: 256,
      searchBoxPlaceholder: 'Search',
      hasSearchBox: true,
      searchBoxAriaLabel: 'Search options',
      clearSearchAriaLabel: 'Clear search',
      noOptionsText: 'No options found',
      loadingText: 'Loading options',
      errorText: 'Options could not be loaded',
      retryText: 'Try again',
    },
  },
]
```

## Migrating from 16.x

- Upgrade the application to Angular, Angular Material, and Angular CDK 21 or 22 first.
- Install the current stable `ngx-mat-select` release.
- Keep the Sass theme import and `NgxMatSelectModule` import shown above.
- Run the application's build, tests, and SSR build if applicable before completing the migration.

The package is validated through its public entry point in clean Angular 21 and Angular 22 consumer applications.

## Project health

- See the [changelog](https://github.com/alireza-sohrabi/ngx-mat-select/blob/master/CHANGELOG.md) for user-facing changes.
- Review the [contribution guide](https://github.com/alireza-sohrabi/ngx-mat-select/blob/master/CONTRIBUTING.md) before opening a pull request.
- Report vulnerabilities privately according to the [security policy](https://github.com/alireza-sohrabi/ngx-mat-select/security/policy).
- Use the [accessibility guide](https://alireza-sohrabi.github.io/ngx-mat-select/accessibility/) for labels, status text, and keyboard behavior.
