<div class="product-hero">
  <div class="product-hero__copy">
    <div class="product-eyebrow">Angular Material · Search · Virtual scroll</div>

# Select from thousands of options without slowing down Angular

`ngx-mat-select` is a form-compatible Angular Material select with built-in search, CDK virtual scrolling, remote filtering, and infinite pagination.

<div class="product-actions">
  <a class="product-button product-button--primary" href="../quick-start">Get started</a>
  <a class="product-button" href="https://stackblitz.com/edit/ngx-mat-select?file=src/app/app.component.html" target="_blank" rel="noopener">Open StackBlitz</a>
</div>

```bash
npm install ngx-mat-select
```
  </div>
  <div class="product-hero__demo">
    <div class="product-demo-label">Live demo</div>

{{ NgDocActions.demo("IntroductionComponent") }}
  </div>
</div>

<div class="product-proof-grid">
  <div><strong>10,000+</strong><span>local options stay responsive</span></div>
  <div><strong>Remote</strong><span>search and page-by-page loading</span></div>
  <div><strong>Forms</strong><span>reactive and template-driven</span></div>
  <div><strong>MIT</strong><span>typed, tested, and open source</span></div>
</div>

## One control for demanding selection flows

Use `ngx-mat-select` when a standard `mat-select` needs to search a large list, render only visible rows, or query an API as the user types. It supports single and multiple selection, custom option and trigger templates, disabled options, light and dark themes, RTL layouts, and mobile fullscreen or bottom-sheet views.

<div class="product-feature-grid">
  <div class="product-feature-card"><strong>Fast local search</strong><p>Filter large in-memory datasets while CDK virtual scroll keeps the DOM small.</p><a href="../client-side">Explore client-side mode →</a></div>
  <div class="product-feature-card"><strong>Remote data built in</strong><p>Debounce queries, fetch one page at a time, show progress, retry failures, and continue on scroll.</p><a href="../server-side">Explore server-side mode →</a></div>
  <div class="product-feature-card"><strong>Accessible states</strong><p>Keyboard navigation, connected combobox/listbox semantics, labelled search controls, and announced loading or empty states.</p><a href="../accessibility">Read the accessibility guide →</a></div>
</div>

## Choose the right approach

| Requirement | Recommended approach |
| --- | --- |
| Search and virtualize a large local option list | Use `ngx-mat-select` in `clientSide` mode |
| Search an API and load results page by page | Use `ngx-mat-select` in `serverSide` mode |
| Add only a search input inside an existing `mat-select` | Consider `ngx-mat-select-search` |
| Use Angular without Angular Material | Choose a framework-independent select |

`ngx-mat-select` is a complete select control. In contrast, `ngx-mat-select-search` is a search input embedded inside Angular Material's existing `mat-select`.

## Ready to try it?

Follow the [five-minute quick start](../quick-start), review [Angular version compatibility](../version-compatibility), or inspect the complete [API reference](../api).
