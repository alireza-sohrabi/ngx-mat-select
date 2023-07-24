import {AfterViewInit, ChangeDetectorRef, Directive, Input, isDevMode, OnDestroy, OnInit} from '@angular/core';

import {BehaviorSubject, merge, Observable, Subject, Subscription, tap} from 'rxjs';
import {
  combineLatestWith,
  distinctUntilChanged,
  filter,
  map,
  startWith,
  switchMap,
  take,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';

import {NgxMatSelectOptionType} from '../../select-model';
import {NgxMatSelectComponent} from '../../select';
import {getSelectOptionLabelError} from '../../select-error';
import {isNullOrUndefined} from "../../shared/utils";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

export interface NgxMatSelectFetchOptions {
  filteredOptions$: Observable<unknown[]>;
  loading$: Observable<boolean>;
  hasSearchBox: boolean | undefined | null;
  searchBoxPlaceholder: string | null | undefined;
}

@Directive()
export abstract class NgxMatSelectFetchOptionsDirective
  implements OnDestroy, OnInit, NgxMatSelectFetchOptions, AfterViewInit {
  /**
   * Function used to sort the values in a select in multiple mode.
   * Follows the same logic as `Array.prototype.sort`.
   * in the server-side mode you should provide sortComparator in order to sort the selected options,
   * but in the client-side mode all the selected options and values would order with the order of received options
   */
  @Input() sortComparator?: (a: unknown, b: unknown, options: unknown[]) => number;

  /**
   * if it's true the search-box will appear inside the panel
   */
  @Input()
  get hasSearchBox(): boolean | undefined | null {
    return this._hasSearchBox;
  }

  set hasSearchBox(value: boolean | undefined | null) {
    this._hasSearchBox = coerceBooleanProperty(value);
    if (this.host.hasSearchBox !== this._hasSearchBox) {
      this.host.hasSearchBox = this._hasSearchBox;
      this._changeDetectorRef.detectChanges();
    }
    this.checkOptionLabel();
    this.initializeSearch();
  }

  private _hasSearchBox = false;

  /**
   * a placeholder for the search-box to be shown if nothing is written in the search-box
   */
  @Input() set searchBoxPlaceholder(value: string | undefined | null) {
    if (this.host.searchBoxComponent && !isNullOrUndefined(value)) {
      this.host.searchBoxPlaceholder = value;
    }
  }

  /**
   * an observable to manage the filtered options state
   */
  filteredOptions$ = new BehaviorSubject<unknown[]>([]);

  /**
   * when the main stream is busy with fetching data from the server, the loading is true
   */
  loading$ = new BehaviorSubject<boolean>(false);

  /**
   * to handle the search
   */
  abstract search: (searchTerm: string) => void;

  /**
   * all the options which are provided up to now
   * @protected
   */
  protected abstract options: unknown[] | undefined | null;

  /**
   * an observable to manage destroying the other observables
   * @protected
   */
  protected destroy$ = new Subject<void>();

  /**
   * the type of received options
   * @protected
   */
  protected optionType: NgxMatSelectOptionType = 'unknown';

  /**
   * if every input initialized or not
   * @private
   */
  private initialized = false;

  /**
   * to recognize the first empty search
   * @private
   */
  private isFirstEmptySearch = true;

  private searchSubscription?: Subscription;

  protected constructor(protected host: NgxMatSelectComponent, protected _changeDetectorRef: ChangeDetectorRef) {
    this.host.filteredOptions$ = this.filteredOptions$.asObservable();
    this.host.loading$ = this.loading$.asObservable().pipe(distinctUntilChanged());
  }

  /**
   * to sync the value with selection Model, and check the possibility of fill incomplete values from the
   * received options
   * @private
   */
  protected abstract syncValueAndOptions: () => void;

  /** Sorts the selected values in the selected based on their order in the panel. */
  protected abstract sortValues: () => void;

  ngOnInit(): void {
    this.initialized = true;
    if (!this.searchSubscription) {
      this.hasSearchBox = this.host.hasSearchBox;
    }

    /**
     * order of initializing matters
     */
    this.checkOptionLabel();
    this.listenToValueChanges();
    this.initSortValues();
  }


  ngAfterViewInit(): void {
    this.initScrollIntoSelectedOption();
  }


  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
    this.filteredOptions$.complete();
    this.loading$.complete();
  }

  /**
   * to check the type of the options to realize there are primitive or an object
   * @protected
   */
  protected checkOptionsType() {
    const options = this.options;
    if (!isNullOrUndefined(options) && options.length > 0) {
      if (options[0] && typeof options[0] === 'object') {
        this.optionType = 'object';
      } else {
        this.optionType = 'primitive';
      }
    }

    this.checkOptionLabel();
  }

  /**
   * to listen to the search-box input changes, and filter the options through the searchTerm
   * @private
   */
  private initializeSearch() {
    this.searchSubscription?.unsubscribe();

    if (this.hasSearchBox) {
      this.searchSubscription = this.host.searchBoxComponent?.search
        .pipe(
          startWith(''),
          tap(() => {
            if (!this.isFirstEmptySearch) {
              this.host.virtualScroll.scrollToIndex(0);
              this.host.activeItemIndex = '0';
              this._changeDetectorRef.markForCheck();
            }

            this.isFirstEmptySearch = false;
          }),
          tap(searchTerm => this.search(searchTerm)),
          takeUntil(this.destroy$)
        )
        .subscribe();
    } else {
      this.search('');
    }
  }

  /**
   * to check value member and display-member are required if they are required, checking they are provided or not
   * @private
   */
  private checkOptionLabel() {
    if (isDevMode() && this.optionType === 'object' && this.initialized) {
      const optionLabel = this.host.optionLabel;

      if (!optionLabel) {
        throw getSelectOptionLabelError();
      }
    }
  }

  /**
   * to sync the selected items with the value of the select-box
   * @private
   */
  private listenToValueChanges() {
    this.host.value$
      .pipe(
        filter(({shouldBeSyncedWithSelection}) => shouldBeSyncedWithSelection),
        tap(() => {
          this.syncValueAndOptions();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * to scroll to the selected option when the select has a value.
   * it works just in client side because we have whole the options and the selection mode has to be single selection,
   * @private
   */
  private initScrollIntoSelectedOption() {
    const selectionModelChanged = this.host.selectionModel?.changed;

    if (selectionModelChanged) {
      this.host.panel.afterOpen
        .pipe(
          combineLatestWith(
            this.filteredOptions$.pipe(take(1)),
            selectionModelChanged.pipe(startWith(this.host.selectionModel?.selected))
          ),
          withLatestFrom(this.filteredOptions$),
          map(([[_], filteredOptions]) => {
            let firstSelectedOption: unknown = undefined;
            let firstSelectedOptionIndex = -1;
            const selection = this.host.selectionModel?.selected;

            if (selection) {
              const compareWithFn = this.host._getCompareWithFn();

              filteredOptions.some((option, index) => {
                const firstIndex = selection.findIndex(selectedOption => compareWithFn(selectedOption, option));

                if (firstIndex !== -1) {
                  firstSelectedOptionIndex = index;
                  firstSelectedOption = option;

                  return true;
                }

                return false;
              });
            }

            return {selectedIndex: firstSelectedOptionIndex, selected: firstSelectedOption};
          }),
          filter(({selectedIndex}) => selectedIndex !== -1),
          tap(({selectedIndex}) => {
            this.host.virtualScroll.scrollToIndex(selectedIndex);
          }),
          filter(({selected}) => !this.scrollIntoVisibleOptionView(selected)),
          switchMap(({selected}) =>
            this.host.visibleOptions.changes.pipe(
              tap(() => this.scrollIntoVisibleOptionView(selected)),
              take(1)
            )
          ),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }
  }

  /**
   * @returns - a boolean to find out whether we are successful in scroll to the selected option or not
   * it depends on whether the corresponding option is present in the options.
   * @param selected - the selected item
   * @private
   */
  private scrollIntoVisibleOptionView(selected: unknown) {
    const compareWithFn = this.host._getCompareWithFn();
    const selectedVisibleOption = this.host.visibleOptions.find(o => compareWithFn(o.value, selected));

    if (selectedVisibleOption) {
      this.host.activeItemIndex = selectedVisibleOption.id?.toString();
      selectedVisibleOption._getHostElement().scrollIntoView({block: 'end'});
      this._changeDetectorRef.detectChanges();
    }

    return !!selectedVisibleOption;
  }

  /**
   * to sort the selected option and values with order of received options, whenever the selection or value changes
   * @private
   */
  private initSortValues() {
    merge(this.host.selectionChange, this.host.value$)
      .pipe(
        tap(() => {
          this.sortValues();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
