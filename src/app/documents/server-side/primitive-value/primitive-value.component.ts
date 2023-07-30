import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {NgxMatSelectSearchParams} from "../../../ngx-mat-select";

@Component({
  templateUrl: './primitive-value.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimitiveValueComponent {

  reactiveFormGroup = new FormGroup({
    selectValue: new FormControl([
      'option_2500',
      'option_110',
      'option_20',
      'option_80'
    ]),
  });

  /**
   * mock server-side request handling with 1-second delay
   * @param searchParams
   */

  fetchFn = (searchParams: NgxMatSelectSearchParams) => {
    const filter = (o: string) =>
      searchParams.searchTerm ? o.toString().includes(searchParams.searchTerm) : true;

    const startIndex = (searchParams.pageNumber - 1) * searchParams.pageSize;
    const result = this._options.filter(o => filter(o)).slice(startIndex, startIndex + searchParams.pageSize);

    return of(result).pipe(delay(1000));

  };

  /**
   * whole the options corresponding DB data
   * @private
   */
  private _options = Array.from(new Array(2000)).map((_, index) => 'options_' + index);

}
