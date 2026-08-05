# NgxMatSelect

`ngx-mat-select` is an independent Angular Material select component with built-in search, virtual scrolling, and server-side infinite scrolling.

## Features

- Client-side and server-side search
- Virtual scrolling for client-side and server-side data
- Infinite scrolling for server-side data
- Single and multiple selection
- Custom option and trigger templates
- Right-to-left layouts with `dir="rtl"`

[Documentation](https://alireza-sohrabi.github.io/ngx-mat-select) · [Customization examples](https://alireza-sohrabi.github.io/ngx-mat-select/#/other-examples/customize) · [StackBlitz](https://stackblitz.com/edit/ngx-mat-select?file=src/app/app.component.html)

## Version compatibility

The current npm stable release is `16.0.4`. The repository source is being prepared for the `21.0.0-next.0` prerelease.

| ngx-mat-select | Angular and Angular Material | Status |
| --- | --- | --- |
| `21.0.0-next.0` / `21.x` | `21.x` or `22.x` | Upcoming; verified with clean Angular 21 and 22 consumers |
| `20.x` | `20.x` | Compatibility release |
| `19.x` | `19.x` | Compatibility release |
| `18.x` | `18.x` | Compatibility release |
| `17.x` | `17.x` | Compatibility release |
| `16.x` | `16.x` | Current npm stable release |
| `15.x` | `15.x` | Previous release line |
| `14.x` | `14.x` | Previous release line |

The Angular 17–20 compatibility releases preserve the validated migration checkpoints for applications that cannot yet move to Angular 21.

## Installation

Install the current stable release:

```bash
npm install ngx-mat-select
```

After the Angular 21 prerelease is published, install it with:

```bash
npm install ngx-mat-select@next
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
- Install `ngx-mat-select@next` while evaluating the prerelease.
- Keep the Sass theme import and `NgxMatSelectModule` import shown above.
- Run the application's build, tests, and SSR build if applicable before moving to the final `21.x` release.

The package is validated through its public entry point in clean Angular 21 and Angular 22 consumer applications.
