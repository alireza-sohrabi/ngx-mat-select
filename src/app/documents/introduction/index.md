# {{ NgDocPage.title }}

You are reading the documentation for NgxMatSelect Component.

# What is NgxMatSelect?
This is an Angular Material custom component, redesigned and inspired by the Angular `mat-select` component to 
concentrate on specific needs like being searchable and using virtual scroll at the same time 
because Angular `mat-select` does not support them at all.

It is common knowledge among `Angular Material` developers that combining `mat-auto-complete` 
and `mat-form-field` can be a good solution to solve the searching issue, 
but yet there is a need to solve this issue in an open-source,
versatile, independent, union, and progressive way, that's where `ngx-mat-select` comes up.

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
>As you can see, `ngx-mat-select` is compatible with `mat-form-field` which means,
>it can be used inside a form, and it has all advantages of the Angular form controller
