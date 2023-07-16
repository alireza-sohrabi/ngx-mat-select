import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {NgxMatSelectConfigExample, NgxMatSelectExampleForms} from '../expamles-select';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {NgxMatSelectSearchParams} from "../../ngx-mat-select";

@Component({
  selector: 'app-server-side',
  templateUrl: './server-side.component.html',
  providers: [{provide: NgxMatSelectExampleForms, useExisting: ServerSideComponent}],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerSideComponent implements NgxMatSelectExampleForms {
  @Input() config!: NgxMatSelectConfigExample;

  @ViewChild(NgForm) ngForm?: NgForm;
  @ViewChild(FormGroupDirective) formGroupDirective?: FormGroupDirective;
  defaultValue = [
    {id: 1, name: `server side_${1}`},
    {id: 2, name: `server side_${2}`},
    {
      id: 160,
      name: `server side_${160}`,
    },
  ];

  constructor(cdk: ChangeDetectorRef) {
    setTimeout(() => {
      this.defaultValue = [{id: 50, name: `server side_${50}`}];

      cdk.markForCheck();
    }, 3000);
  }

  reactiveFormGroup = new FormGroup({
    multipleControl: new FormControl(this.defaultValue),
    singleControl: new FormControl(this.defaultValue[0]),
  });

  private _options = Array.from(new Array(2000)).map((_, index) => ({
    name: 'server side_' + index,
    id: index,
  }));

  fetchFn = (searchParams: NgxMatSelectSearchParams) => {
    const filter = (o: any) =>
      searchParams.searchTerm ? o[this.config.optionLabel as string].toString().includes(searchParams.searchTerm) : true;

    const startIndex = (searchParams.pageNumber - 1) * searchParams.pageSize;
    const result = this._options.filter(o => filter(o)).slice(startIndex, startIndex + searchParams.pageSize);

    return of(result).pipe(delay(1000));

  };
}
