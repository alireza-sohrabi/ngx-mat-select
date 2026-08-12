# Accessibility and keyboard support

`ngx-mat-select` exposes connected combobox and listbox semantics, labels the embedded search field, and announces loading, empty, and request-error states. Disabled, required, invalid, expanded, and multiple-selection states are also exposed to assistive technology.

## Provide a visible label

Prefer a visible `mat-label` inside `mat-form-field`:

```html
<mat-form-field>
  <mat-label>Country</mat-label>
  <ngx-mat-select
    clientSide
    [options]="countries"
    [hasSearchBox]="true"
    searchBoxAriaLabel="Search countries">
  </ngx-mat-select>
</mat-form-field>
```

When a visible label is not possible, provide `aria-label` or `aria-labelledby`. Give the search field a contextual name with `searchBoxAriaLabel`.

## Keyboard commands

| Key | Behavior |
| --- | --- |
| Enter, Space, Arrow Down, Arrow Up | Open a closed select |
| Arrow Down, Arrow Up | Move through enabled visible options |
| Home, End | Move to the first or last visible option |
| Page Up, Page Down | Move by ten visible options |
| Enter | Select the active option |
| Escape | Close the panel and restore focus |

## Accessible status text

All user-facing status labels are configurable and can be translated:

```html
<ngx-mat-select
  noOptionsText="No matching countries"
  loadingText="Loading countries"
  errorText="Countries could not be loaded"
  retryText="Load again">
</ngx-mat-select>
```

Applications should still test their complete forms with keyboard-only navigation and the screen readers supported by their organization. Report an accessibility defect through the project's [GitHub issue form](https://github.com/alireza-sohrabi/ngx-mat-select/issues/new/choose).
