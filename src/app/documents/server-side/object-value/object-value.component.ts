import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {NgxMatSelectSearchParams} from "../../../ngx-mat-select";

@Component({
  templateUrl: './object-value.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectValueComponent  {

  reactiveFormGroup = new FormGroup({
    selectValue: new FormControl([
      {
        id: 2500,
        name: `options_${2500}`,
      },
      {id: 1, name: `options_${1}`},
      {id: 2, name: `options_${2}`},
      {
        id: 160,
        name: `options_${160}`,
      },
    ]),
  });

  /**
   * mock server-side request handling with 1-second delay
   * @param searchParams
   */
  fetchFn = (searchParams: NgxMatSelectSearchParams) => {
    const filter = (o: any) =>
      searchParams.searchTerm ? o['name'].toString().includes(searchParams.searchTerm) : true;

    const startIndex = (searchParams.pageNumber - 1) * searchParams.pageSize;
    const result = this._options.filter(o => filter(o)).slice(startIndex, startIndex + searchParams.pageSize);

    return of(result).pipe(delay(1000));

  };

  /**
   * whole the options corresponding DB data
   * @private
   */
  private _options = Array.from(new Array(2000)).map((_, index) => ({
    name: 'options_' + index,
    id: index,
  }));

}
