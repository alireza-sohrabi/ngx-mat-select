# Install ngx-mat-select

This guide adds a searchable, virtualized select to an Angular Material application.

## 1. Install the package

```bash group="package-manager" name="npm" active
npm install ngx-mat-select
```

```bash group="package-manager" name="Yarn"
yarn add ngx-mat-select
```

Angular Material, the CDK, animations, forms, and RxJS are peer dependencies. Use the [version compatibility guide](../version-compatibility) to choose the correct package major.

## 2. Add the theme

Include the library mixins after defining your Angular Material theme:

```scss name="styles.scss"
@use "@angular/material" as mat;
@use "ngx-mat-select" as ngxMatSelect;

$theme: mat.m2-define-light-theme((
  color: (
    primary: mat.m2-define-palette(mat.$m2-teal-palette),
  ),
));

@include mat.all-component-themes($theme);
@include ngxMatSelect.theme($theme);
@include ngxMatSelect.typography(mat.m2-define-typography-config());
```

See the official [Angular Material theming guide](https://material.angular.dev/guide/theming) if your application does not already define a theme.

## 3. Import the module

Import `NgxMatSelectModule` in an NgModule or in a standalone component's `imports` array:

```typescript name="feature.module.ts"
import {NgxMatSelectModule} from 'ngx-mat-select';

@NgModule({
  imports: [NgxMatSelectModule],
})
export class FeatureModule {}
```

## 4. Add the select

```typescript name="user-picker.component.ts"
users = [
  {id: 1, name: 'Ada Lovelace'},
  {id: 2, name: 'Grace Hopper'},
];
```

```html name="user-picker.component.html"
<mat-form-field appearance="outline">
  <mat-label>User</mat-label>
  <ngx-mat-select
    clientSide
    [options]="users"
    [hasSearchBox]="true"
    optionLabel="name"
    dataKey="id"
    searchBoxPlaceholder="Search users">
  </ngx-mat-select>
</mat-form-field>
```

Use `optionLabel` for the displayed object property and `dataKey` for stable object identity. Primitive arrays require neither input.

## 5. Connect a form

`ngx-mat-select` implements `ControlValueAccessor`, so it works with `formControl`, `formControlName`, and `ngModel`:

```html
<ngx-mat-select
  clientSide
  [options]="users"
  [formControl]="userControl"
  optionLabel="name"
  dataKey="id">
</ngx-mat-select>
```

Next, choose [client-side mode](../client-side) for complete local datasets or [server-side mode](../server-side) for remote search and pagination.
