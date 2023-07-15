import {AfterViewInit, ChangeDetectorRef, Directive, Input, OnDestroy} from '@angular/core';
import {ScrollDispatcher} from '@angular/cdk/scrolling';

import {BehaviorSubject, combineLatest, Observable, pairwise, ReplaySubject, tap} from 'rxjs';
import {filter, map, startWith, switchMap, takeUntil} from 'rxjs/operators';

import {NgxMatSelectSearchParams} from '../../ngx-mat-select';
import {NgxMatSelectComponent} from '../../ngx-mat-select.component';
import {NgxMatSelectFetchOptionsDirective} from './ngx-mat-select-fetch-options';
import {isNullOrUndefined} from '../../shared/utils';

@Directive({
  selector: 'ngx-mat-select[serverSide]:not(ngx-mat-select[clientSide])',
  exportAs: 'ngxMatSelectServerSide',
})
/**
 * a directive to handle server-side mode, which can get the lazy-data page per page  with the provided pageSize
 */
export class NgxMatSelectFetchOptionsServerSideDirective
  extends NgxMatSelectFetchOptionsDirective
  implements AfterViewInit, OnDestroy {

  /**
   * the page size, every calculation for figuring out whether there is a next page or not based on this property
   */
  @Input() pageSize = 10;

  /**
   * to fetch the options from the server through searchParams
   */
  @Input() set fetchOptions(fetchFunction: (searchParams: NgxMatSelectSearchParams) => Observable<unknown[]>) {
    this.destroy$.next(void 0);

    combineLatest([this.search$, this.fetchNext$])
      .pipe(
        startWith(['', '']),
        pairwise(),
        map(([[prevSearchTerm], [nextSearchTerm]]) => {
          if (prevSearchTerm !== nextSearchTerm) {
            this.pageNumber = 1;
            this.hasMore = true;
            this.options = [];
          }

          return nextSearchTerm;
        }),
        tap(() => {
          this.loading$.next(true);
          this._changeDetectorRef.detectChanges();
        }),
        switchMap(searchTerm =>
          fetchFunction({searchTerm, pageNumber: this.pageNumber, pageSize: this.pageSize}).pipe(
            tap(nextOptions => {
              if (nextOptions.length > 0) {
                this.pageNumber++;
              }

              this.hasMore = nextOptions?.length === this.pageSize;
            }),
            map(nextOptions => {
              this.options = this.options.concat(...nextOptions);

              return [...this.options];
            }),
            tap(options => {
              this.filteredOptions$.next(options);
              this.loading$.next(false);
            }),
            tap(() => {
              this.checkOptionsType();
              this.sortValues();
            }),
            tap(() => {
              this._changeDetectorRef.detectChanges();
            })
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * to store the previous options to use them after coming back to the old pages
   * @private
   */
  protected options: unknown[] = [];

  /**
   *This would store the current page number that we are in it,
   * it stats from one
   * @private
   */
  private pageNumber = 1;

  /**
   * an observable to force the main stream to get the new data filtered through searchTerm
   * @private
   */
  private search$ = new ReplaySubject<string>(1);

  /**
   * an observable to force the main stream to get next page data according to the pageNumber
   * @private
   */
  private fetchNext$ = new BehaviorSubject<void>(void 0);

  /**
   * if it's false when getting the next page request comes the request will be blocked
   * before sending to the server
   * @private
   */
  private hasMore = true;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    host: NgxMatSelectComponent,
    private scrollDispatcher: ScrollDispatcher
  ) {
    super(host, changeDetectorRef);
  }

  /**
   * to search the options with the searchTerm
   * @param searchTerm
   */
  search = (searchTerm: string) => {
    this.search$.next(searchTerm);
  };

  /**
   * to fetch the next page if any
   */
  fetchNext() {
    if (this.hasMore) {
      this.fetchNext$.next(void 0);
    }
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.initializeInfiniteScroll();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.search$.complete();
    this.fetchNext$.complete();
  }

  /**
   * to sort the selected items according to the provided sortComparator function
   */
  protected sortValues = () => {
    if (this.host.multiple && this.options.length > 0) {
      if (!isNullOrUndefined(this.sortComparator) && typeof this.sortComparator === 'function') {
        const sortComparator = this.sortComparator;

        this.host.selectionModel?.sort((a, b) => {
          return sortComparator(a, b, this.options);
        });

        this.host.stateChanges.next();
      }
    }
  };

  /**
   * Actually in the server-side mode we would not be able to sync options with values
   * in order to omit non-exist values through the received options,
   * because we don't have all options available at once, so we don't have
   * any indicator to distinguish between them, so whatever value is provided would be set as the selected option
   */
  protected syncValueAndOptions = () => {
    const value = this.host.getValue();

    if (isNullOrUndefined(value)) {
      this.host.selectionModel?.clear();
    } else {
      this.host.selectionModel?.setSelection(...value);
      this.sortValues();
    }

    this._changeDetectorRef.markForCheck();
  };

  /**
   * to listen to the virtual scroll events, and get the next page at the appropriate time.
   * @private
   */
  private initializeInfiniteScroll() {
    this.scrollDispatcher
      .scrolled()
      .pipe(
        filter(() => this.host.virtualScroll.getRenderedRange().end === this.host.virtualScroll.getDataLength()),
        filter(() => !this.loading$.getValue()),
        tap(() => {
          this.fetchNext();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
