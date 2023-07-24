# {{ NgDocPage.title }}

If you want to use dark-theme add the `darkMode` class on the body html tag:

```scss name="styles.scss"
@use "ngx-mat-select" as ngxMatSelect;
// or @use "node_modules/ngx-mat-select" as ngxMatSelect;

.darkMode {
      @include ngxMatSelect.theme($your-dark-theme);
  }
```
