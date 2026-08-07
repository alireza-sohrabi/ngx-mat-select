

# ngx-mat-select: searchable and virtualized Angular Material select

`ngx-mat-select` is an independent Angular Material select component for local and remote datasets. It combines built-in search, virtual scrolling, server-side filtering, infinite scrolling, single or multiple selection, and custom option templates in one form-compatible control.

Use it when a standard Angular Material `mat-select` does not provide the search, virtualization, or remote-data behavior your application needs.

## ngx-mat-select compared with ngx-mat-select-search

`ngx-mat-select` provides the complete select control and is designed to virtualize large option lists and fetch filtered pages from a server. `ngx-mat-select-search` provides a search input that is embedded inside an existing `mat-select`. The packages solve related but different problems.

Here is a minimal example:

```typescript name="my.component.ts"
@Component({
  templateUrl: './my-component.html'
})
export class MyComponent {
  options = [1,2,3,4,5,6,7];
}
```

```html name="my.component.html"
<mat-form-field>
  <mat-label>
    Select Box
  </mat-label>

  <ngx-mat-select
    clientSide
    [hasSearchBox]="true"
    [options]="options"
  >
  </ngx-mat-select>
</mat-form-field>
```

{{ NgDocActions.demo("IntroductionComponent") }}

>**Note**
>As you can see, `ngx-mat-select` is compatible with `mat-form-field`, Angular forms, and Angular Material theming.
