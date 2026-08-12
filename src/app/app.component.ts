import {Component, DestroyRef, DOCUMENT, inject, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {filter} from 'rxjs';

const DEFAULT_TITLE = 'ngx-mat-select | Searchable Virtual Angular Material Select';
const DEFAULT_DESCRIPTION = 'ngx-mat-select is an Angular Material select component with built-in search, virtual scrolling, server-side filtering, infinite scrolling, and multiple selection.';

const ROUTE_METADATA: Record<string, {title: string; description: string}> = {
  'quick-start': {
    title: 'Install ngx-mat-select | Angular Material Select',
    description: 'Install and configure ngx-mat-select for searchable, virtualized Angular Material select controls.',
  },
  'client-side': {
    title: 'Client-side Search and Virtual Scroll | ngx-mat-select',
    description: 'Build searchable Angular Material selects with virtual scrolling for large client-side datasets.',
  },
  'server-side': {
    title: 'Server-side Filtering and Infinite Scroll | ngx-mat-select',
    description: 'Load, search, filter, and infinitely scroll remote Angular Material select options with ngx-mat-select.',
  },
  'version-compatibility': {
    title: 'Angular Version Compatibility | ngx-mat-select',
    description: 'Find compatible ngx-mat-select, Angular, Angular Material, and Angular CDK versions.',
  },
  accessibility: {
    title: 'Accessible Angular Material Select | ngx-mat-select',
    description: 'Keyboard commands, screen-reader semantics, labels, and accessible loading, empty, and error states in ngx-mat-select.',
  },
  'dark-theme': {
    title: 'Angular Material Select Dark Theme | ngx-mat-select',
    description: 'Theme ngx-mat-select for light and dark Angular Material applications using Sass mixins.',
  },
  'other-examples/customize': {
    title: 'Customize ngx-mat-select | Templates and Display Options',
    description: 'Customize ngx-mat-select option templates, trigger content, multiple-value display, and panel presentation.',
  },
  api: {
    title: 'ngx-mat-select API Reference',
    description: 'Inputs, outputs, directives, configuration, and public TypeScript types for ngx-mat-select.',
  },
};

const SITE_URL = 'https://alireza-sohrabi.github.io/ngx-mat-select';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class AppComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  constructor() {
    const legacyRoute = this.document.location.hash.startsWith('#/')
      ? this.document.location.hash.slice(1)
      : null;

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.updateMetadata(event.urlAfterRedirects));

    if (legacyRoute) {
      void this.router.navigateByUrl(legacyRoute, {replaceUrl: true});
    }
  }

  private updateMetadata(url: string): void {
    const route = Object.keys(ROUTE_METADATA).find((key) => url.includes(key));
    const metadata = route ? ROUTE_METADATA[route] : undefined;

    this.title.setTitle(metadata?.title ?? DEFAULT_TITLE);
    this.meta.updateTag({
      name: 'description',
      content: metadata?.description ?? DEFAULT_DESCRIPTION,
    });
    this.meta.updateTag({property: 'og:title', content: metadata?.title ?? DEFAULT_TITLE});
    this.meta.updateTag({property: 'og:description', content: metadata?.description ?? DEFAULT_DESCRIPTION});
    this.meta.updateTag({name: 'twitter:title', content: metadata?.title ?? DEFAULT_TITLE});
    this.meta.updateTag({name: 'twitter:description', content: metadata?.description ?? DEFAULT_DESCRIPTION});

    const cleanRoute = route === 'introduction' || !route ? '' : `/${route}`;
    const canonicalUrl = `${SITE_URL}${cleanRoute}/`;
    this.meta.updateTag({property: 'og:url', content: canonicalUrl});
    this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
  }
}
