# {{ NgDocPage.title }}

# Install the library

First install ngx-mat-select library:

```string group="my-group2" name="Npm" active
npm i ngx-mat-select
```

```string group="my-group2" name="Yarn" 
yran i ngx-mat-select
```

# Add Styles

Second you need to add styles to your styles.scss

```scss name="styles.scss" 
@use "ngx-mat-select" as ngxMatSelect;
// or @use "node_modules/ngx-mat-select" as ngxMatSelect;

@include ngxMatSelect.theme($your-angular-material-theme);
@include ngxMatSelect.typography($your-angular-material-typography);
```

>**Note**
> for more information about Angular Material theming and how you can add or
change your theme, visit  [Angular Material Theming](https://material.angular.io/guide/theming)

# Add NgxMatSelectModule

Third add NgxMatSelectModule into your Module

```typescript  name="app.module.ts" 
import {NgxMatSelectModule} from "ngx-mat-select";

@NgModule({
    imports: [
        NgxMatSelectModule
    ]
})
export class AppModule {
}

```




