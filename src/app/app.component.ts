import {Component, DestroyRef, inject, ViewEncapsulation} from '@angular/core';
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
};

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class AppComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.updateMetadata(event.urlAfterRedirects));
  }

  private updateMetadata(url: string): void {
    const route = Object.keys(ROUTE_METADATA).find((key) => url.includes(key));
    const metadata = route ? ROUTE_METADATA[route] : undefined;

    this.title.setTitle(metadata?.title ?? DEFAULT_TITLE);
    this.meta.updateTag({
      name: 'description',
      content: metadata?.description ?? DEFAULT_DESCRIPTION,
    });
  }
}
