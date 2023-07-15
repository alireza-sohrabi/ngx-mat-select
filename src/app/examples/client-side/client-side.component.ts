import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {NgxMatSelectConfigExample, NgxMatSelectExampleForms} from '../expamles-select';

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.component.html',
  providers: [{provide: NgxMatSelectExampleForms, useExisting: ClientSideComponent}],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientSideComponent implements NgxMatSelectExampleForms {
  @Input() config!: NgxMatSelectConfigExample;

  @ViewChild(NgForm) ngForm?: NgForm;
  @ViewChild(FormGroupDirective) formGroupDirective?: FormGroupDirective;

  defaultValue = [
    {id: 150, name: `server side_${150}`},
    {id: 250, name: `server side_${250}`},
    {
      id: 160,
      name: `server side_${160}`,
    },
  ];

  reactiveFormGroup = new FormGroup({
    multipleControl: new FormControl(this.defaultValue, {initialValueIsDefault: false}),
    singleControl: new FormControl({value: this.defaultValue[0], disabled: false}, {initialValueIsDefault: true}),
  });

  options = [
    ...Array.from(new Array(2000)).map((_, index) => ({
      name: 'client side_' + index,
      id: index,
    })),
  ];
}
