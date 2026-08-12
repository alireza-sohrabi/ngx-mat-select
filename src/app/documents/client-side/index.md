# Client-side search and virtual scrolling

Use `clientSide` when the application already has the complete option list. Search filters the array in memory, while CDK virtual scrolling renders only the visible rows.

## Object options without a form value

Listen to `selectionChange` when selection is handled directly rather than through an Angular form.

{{ NgDocActions.demo("WithoutAnyValueComponent") }}

## Store a primitive value

Set `optionLabel` to the property users see and `optionValue` to the primitive property stored by the form.

{{ NgDocActions.demo("ReactiveFormPrimitiveValueComponent") }}

```html
<ngx-mat-select
  clientSide
  [options]="users"
  optionLabel="name"
  optionValue="id"
  [formControl]="userIdControl">
</ngx-mat-select>
```

`optionValue` directly determines the emitted and stored value.

## Store the selected object

Omit `optionValue` when the form should store the entire object. Provide `dataKey` for stable identity, or `compareWith` when identity requires custom logic.

{{ NgDocActions.demo("ReactiveFormObjectValueComponent") }}

`dataKey="id"` compares `option.id` with `value.id` and safely handles nullish values. When both are supplied, `compareWith` takes precedence.

Client-side mode validates form values against the complete options array. Values that are not present are removed after options finish loading.

## Primitive options

Strings, numbers, booleans, `null`, and `undefined` can be used directly without `optionLabel` or `optionValue`.

{{ NgDocActions.demo("PrimitiveComponent") }}

## Load the complete array asynchronously

Set `loading` while the array is being fetched. This prevents an initial form value from being removed before options arrive.

{{ NgDocActions.demo("OptionsAtOnceComponent") }}

Client-side mode expects the complete array in one update. For paged APIs, use [server-side mode](../server-side).

## Customize matching

Default string matching is trimmed and case-insensitive. Provide `searchComparison` for locale-aware, multi-field, or fuzzy matching.

{{ NgDocActions.demo("SearchBoxComparisonComponent") }}
