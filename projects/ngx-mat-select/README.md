# ngx-mat-select — Searchable Virtual Angular Material Select

`ngx-mat-select` is an independent Angular Material select component with built-in search, virtual scrolling, server-side filtering, infinite scrolling, and single or multiple selection.

## Features

- Client-side and server-side search
- Virtual scrolling for client-side and server-side data
- Infinite scrolling for server-side data
- Single and multiple selection
- Custom option and trigger templates
- Right-to-left layouts with `dir="rtl"`

[Documentation](https://alireza-sohrabi.github.io/ngx-mat-select/) | [npm](https://www.npmjs.com/package/ngx-mat-select) | [Customization examples](https://alireza-sohrabi.github.io/ngx-mat-select/#/other-examples/customize) | [StackBlitz](https://stackblitz.com/edit/ngx-mat-select?file=src/app/app.component.html)

## How it differs from ngx-mat-select-search

`ngx-mat-select` is a complete select control designed for large local or remote datasets. Search, virtual scrolling, server-side filtering, infinite scrolling, option templates, and selection behavior are part of the component.

[`ngx-mat-select-search`](https://www.npmjs.com/package/ngx-mat-select-search) is a search input intended to be placed inside Angular Material's existing `mat-select`. Choose `ngx-mat-select` when you need an independent, virtualized select with first-class server-side data support.

## Version compatibility

The current npm stable release is `21.0.1` and supports Angular and Angular Material 21 or 22.

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
