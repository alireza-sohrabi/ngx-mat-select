import {ChangeDetectionStrategy, Component, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import { Validators} from '@angular/forms';
import {NgxMatSelectConfigExample, NgxMatSelectExampleForms} from './expamles-select';


@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ExamplesComponent {
  @ViewChildren(NgxMatSelectExampleForms) forms!: QueryList<NgxMatSelectExampleForms>;

  config: NgxMatSelectConfigExample = {
    optionLabel: 'name',
    optionValue: 'id',
    hasSearchBox: true,
    hasBackButton: false,
    multipleDisplay: 'text',
    placeholder: 'select an option',
    viewType: 'Default',
    searchBoxPlaceholder: 'search',
    disabled: false,
    required: false,
    multiple: true,
    optionHeight: 48,
    panelHeight: 350,
    panelWidth: 'auto',
    dataKey: 'id',
  };

  constructor() {}

  onClearForms() {
    this.forms.forEach(({ngForm, formGroupDirective}) => {
      ngForm?.form.reset();
      formGroupDirective?.form.reset();
    });
  }

  onConfigChange(config: NgxMatSelectConfigExample) {
    this.forms.forEach(({formGroupDirective}) => {
      const form = formGroupDirective?.form;
      if (form) {
        const controls = form.controls;

        if (controls) {
          for (const controlKey in controls) {
            const control = controls[controlKey];

            if (config.disabled !== control.disabled) {
              if (config.disabled) {
                form.disable();
              } else {
                form.enable();
              }
            }

            if (control.hasValidator(Validators.required) && !config.required) {
              control.removeValidators(Validators.required);
              control.updateValueAndValidity();
            } else if (!control.hasValidator(Validators.required) && config.required) {
              control.addValidators(Validators.required);
              control.updateValueAndValidity();
            }
          }
        }
      }
    });
  }
}
