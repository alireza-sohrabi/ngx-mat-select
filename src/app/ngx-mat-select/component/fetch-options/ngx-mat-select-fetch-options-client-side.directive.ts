import {ChangeDetectorRef, Directive, Input, OnChanges, SimpleChanges} from '@angular/core';

import {NgxMatSelectFetchOptionsDirective} from './ngx-mat-select-fetch-options';
import {NgxMatSelectComponent} from '../../select';
import {isNullOrUndefined} from '../../shared/utils';

@Directive({
  selector: 'ngx-mat-select[clientSide]:not(ngx-mat-select[serverSide])',
  exportAs: 'ngxMatSelectClientSide',
})
/**
 * to fetch the whole options at once, and use a search-box if needed
 */
export class NgxMatSelectFetchOptionsClientSideDirective extends NgxMatSelectFetchOptionsDirective implements OnChanges {
  /**
   * the options that we want to pick up an item or items from them
   */
  @Input() options: unknown[] | null | undefined;

  /**
   * if true the loading indicator appears in the panel,
   * you can use this, when the options are loading for the very first time
   * @param value
   */
  @Input() set loading(value: boolean | undefined | null) {
    this.loading$.next(value || false);
  }

  /**
   * a search comparison function, that will be applied on filtering of the options when the client searches
   */
  @Input() searchComparison?: (searchTerm: string, option: any) => boolean;

  constructor(host: NgxMatSelectComponent, changeDetectorRef: ChangeDetectorRef) {
    super(host, changeDetectorRef);
  }

  /**
   * to search the options through the searchTerm
   * @param searchTerm
   */
  search = (searchTerm: string) => {
    const comparisonFn = (option: any) => {
      if (!isNullOrUndefined(searchTerm) && searchTerm !== '') {
        if (this.searchComparison) {
          return this.searchComparison(searchTerm, option);
        } else {
          if (this.host.optionLabel && this.optionType === 'object') {
            return option[this.host.optionLabel]?.toString().includes(searchTerm);
          } else {
            return option?.toString().includes(searchTerm);
          }
        }
      }

      return true;
    };

    if (!isNullOrUndefined(this.options)) {
      this.filteredOptions$.next(this.options.filter(comparisonFn).slice());
    }
  };

  /**
   * to sort the selected items according to the received options,
   * or the provided sortComparator function
   */
  protected sortValues = () => {
    if (this.host.multiple) {
      const options = this.options || [];

      this.host.selectionModel?.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });

      this.host.stateChanges.next();
    }
  };

  /**
   * if a value is not present in the received options, it would be omitted from the value and the selection
   */
  protected syncValueAndOptions = () => {
    if (this.host.selectionModel) {
      const value = this.host.getValue();
      const compareWithFn = this.host._getCompareWithFn();
      const options = this.options || [];

      if (!isNullOrUndefined(value)) {
        if (options.length > 0 && value.length > 0) {
          const selected: { value: any; option: any }[] = [];

          value.forEach((value: any) => {
            options.some((option: any) => {
              if (compareWithFn(option, value)) {
                selected.push({option, value});

                return true;
              }

              return false;
            });
          });

          this.host.selectionModel.setSelection(...selected.map(s => s.option));
          const selectedValue = selected.map(s => s.value);
          this.host.setValue(this.host._toFlat(selectedValue), false, true);

        } else if (!this.loading$.getValue()) {
          this.host.selectionModel.clear();
          this.host.setValue(null, false, true);
        }
      } else {
        const isThereAnyNullOrUndefinedInOptions =
          options.filter(o => compareWithFn(o, undefined) || compareWithFn(o, null)).length > 0;

        if (options.length > 0 && isThereAnyNullOrUndefinedInOptions) {
          this.host.selectionModel.setSelection(value);
        } else {
          this.host.selectionModel.clear();
        }
      }

      this._changeDetectorRef.markForCheck();
      this.host.stateChanges.next();
    }
  };


  ngOnChanges(changes: SimpleChanges): void {
    const optionsChange = changes['options'];

    if (optionsChange && optionsChange.previousValue !== optionsChange.currentValue) {
      this.host.searchBoxComponent?.clear();
      this.search('');
      this.checkOptionsType();
      this.syncValueAndOptions();
    }
  }
}
