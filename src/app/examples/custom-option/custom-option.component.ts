import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgxMatSelectConfigExample, NgxMatSelectExampleForms} from '../expamles-select';

@Component({
  selector: 'app-custom-option',
  templateUrl: './custom-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: NgxMatSelectExampleForms, useExisting: CustomOptionComponent}],
})
export class CustomOptionComponent implements NgxMatSelectExampleForms {
  @Input() config!: NgxMatSelectConfigExample;
  @ViewChild(NgForm) ngForm?: NgForm;

  defaultValue = [0, 20, 100];

  options = Array.from(new Array(2000)).map((_, index) => index);
}
