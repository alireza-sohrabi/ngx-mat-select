# Server-side search and infinite scroll

Use `serverSide` when downloading the complete option list would be slow or wasteful. The component queries your API when the search changes and requests another page as the virtual list approaches its end.

## Fetch options

The fetch function receives a one-based page number and returns an `Observable` containing that page:

| Property | Meaning |
| --- | --- |
| `searchTerm` | Current text entered in the search field |
| `pageNumber` | Requested page, starting at `1` |
| `pageSize` | Requested number of options |

{{ NgDocActions.demo("FetchOptionsComponent") }}

```typescript
fetchUsers = ({searchTerm, pageNumber, pageSize}: NgxMatSelectSearchParams) =>
  this.http.get<User[]>('/api/users', {
    params: {q: searchTerm, page: pageNumber, pageSize},
  });
```

```html
<ngx-mat-select
  serverSide
  [fetchOptions]="fetchUsers"
  [pageSize]="25"
  [hasSearchBox]="true"
  optionLabel="name"
  dataKey="id">
</ngx-mat-select>
```

The panel displays and announces loading, empty, error, and retry states. Customize their labels with `loadingText`, `noOptionsText`, `errorText`, and `retryText`.

## Object values

When values are objects, provide `optionLabel` plus either `dataKey` or `compareWith`. Do not set `optionValue` if the form should store the entire object.

{{ NgDocActions.demo("ObjectValueComponent") }}

## Primitive values

Primitive options do not require `optionLabel`, `optionValue`, or `dataKey`.

{{ NgDocActions.demo("PrimitiveValueComponent") }}

## Important value behavior

Server-side mode cannot validate a preselected value against every possible option because only part of the remote dataset is loaded. Preselected values are therefore retained until your application changes them.

For a complete in-memory dataset, use [client-side mode](../client-side).
