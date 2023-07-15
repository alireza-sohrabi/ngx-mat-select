import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgxMatSelectConfigExample, NgxMatSelectExampleForms} from '../expamles-select';

@Component({
  selector: 'app-use-primitives',
  templateUrl: './use-primitives.component.html',
  providers: [{provide: NgxMatSelectExampleForms, useExisting: UsePrimitivesComponent}],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsePrimitivesComponent implements NgxMatSelectExampleForms {
  @Input() config!: NgxMatSelectConfigExample;
  @ViewChild(NgForm) ngForm?: NgForm;

  defaultValue = [150, 20, 100];

  options = [...Array.from(new Array(2000)).map((_, index) => index)];
}
