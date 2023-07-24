import {ChangeDetectionStrategy, Component} from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {NgxMatSelectSearchParams} from "../../../ngx-mat-select";

@Component({
  templateUrl: './fetch-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FetchOptionsComponent  {

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
