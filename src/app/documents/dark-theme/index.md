# Dark theme

Include the library theme mixin inside the same selector that activates your Angular Material dark theme:

```scss name="styles.scss"
@use "@angular/material" as mat;
@use "ngx-mat-select" as ngxMatSelect;

.dark-mode {
  @include mat.all-component-colors($dark-theme);
  @include ngxMatSelect.theme($dark-theme);
}
```

Apply `dark-mode` to a common ancestor, such as `<body>`. Include typography once globally with `ngxMatSelect.typography(...)`.
