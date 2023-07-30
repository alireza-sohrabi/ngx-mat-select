import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {NgxMatSelectConfigExample, NgxMatSelectExampleForms} from '../expamles-select';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-custom-trigger',
  templateUrl: './custom-trigger.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: NgxMatSelectExampleForms, useExisting: CustomTriggerComponent}],
})
export class CustomTriggerComponent implements NgxMatSelectExampleForms {
  @Input() config!: NgxMatSelectConfigExample;
  @ViewChild(NgForm) ngForm?: NgForm;

  defaultValue = [0, 20, 100];

  options = Array.from(new Array(2000)).map((_, index) => index);
}
