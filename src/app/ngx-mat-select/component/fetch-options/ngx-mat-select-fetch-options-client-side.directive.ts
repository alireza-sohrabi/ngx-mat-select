import {ChangeDetectorRef, Directive, Input} from '@angular/core';

import {NgxMatSelectFetchOptionsDirective} from './ngx-mat-select-fetch-options';
import {NgxMatSelectComponent} from '../../ngx-mat-select.component';
import {isNullOrUndefined} from '../../shared/utils';

@Directive({
  selector: 'ngx-mat-select[clientSide]:not(ngx-mat-select[serverSide])',
  exportAs: 'ngxMatSelectClientSide',
})
/**
 * to fetch the whole options at once, and use a search-box if needed
 */
export class NgxMatSelectFetchOptionsClientSideDirective extends NgxMatSelectFetchOptionsDirective {
  /**
   * the options that we want to pick up an item or items from them
   */
  @Input()
  get options() {
    return this._options;
  }

  set options(options: unknown[]) {
    this._options = options || [];
    this.checkOptionsType();
    this.syncValueAndOptions();
  }

  protected _options: unknown[] = [];

  /**
   * if true the loading indicator appears in the panel,
   * you can use this, when the options are loading for the very first time
   * @param value
   */
  @Input() set loading(value: boolean) {
    this.loading$.next(value);
  }

  /**
   * a search comparison function, that will be applied on filtering of the options when the client searches
   */
  @Input() searchComparison?: (searchTerm: string, option: unknown) => boolean;

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

    this.filteredOptions$.next(this.options.filter(comparisonFn).slice());
  };

  /**
   * to sort the selected items according to the received options,
   * or the provided sortComparator function
   */
  protected sortValues = () => {
    if (this.host.multiple) {
      const options = this.options;

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

      if (!isNullOrUndefined(value)) {
        if (this.options.length > 0 && value.length > 0) {
          const selected: {value: any; option: any}[] = [];

          value.forEach((value: any) => {
            this.options.some((option: any) => {
              if (compareWithFn(option, value)) {
                selected.push({option, value});

                return true;
              }

              return false;
            });
          });

          this.host.selectionModel.setSelection(...selected.map(s => s.option));
          const selectedValue = selected.map(s => s.value);

          if (value.length !== selectedValue.length) {
            const flatValue = this.host._toFlat(selectedValue);
            this.host.setValue(flatValue, false, true);
          }
        } else {
          this.host.selectionModel.clear();
          this.host._onChange(null);
        }
      } else {
        const isThereAnyNullOrUndefinedInOptions =
          this.options.filter(o => compareWithFn(o, undefined) || compareWithFn(o, null)).length > 0;

        if (this.options.length > 0 && isThereAnyNullOrUndefinedInOptions) {
          this.host.selectionModel.setSelection(value);
        } else {
          this.host.selectionModel.clear();
        }
      }

      this._changeDetectorRef.markForCheck();
    }
  };
}
