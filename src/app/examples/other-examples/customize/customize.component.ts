import {ChangeDetectorRef, Component} from '@angular/core';
import {NgxMatSelectConfigExample} from "./customize-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ngx-mat-select',
  templateUrl: './customize.component.html',
})
export class CustomizeComponent {
  options = Array.from(new Array(2000)).map((_, index) => ({
    name: 'options_' + index,
    id: index,
  }));
  show = true;

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
    overlayPanelClass: '',
    recreate: false,
  };

  defaultValue = [
    {id: 150, name: `option_${150}`},
    {id: 250, name: `option_${250}`},
    {
      id: 160,
      name: `option_${160}`,
    },
  ];

  reactiveFormGroup = new FormGroup({
    multipleControl: new FormControl(this.defaultValue, {initialValueIsDefault: false}),
    singleControl: new FormControl({value: this.defaultValue[0], disabled: false}, {initialValueIsDefault: true}),
  });


  onConfigChange(config: NgxMatSelectConfigExample) {
    if (config.recreate) {

      this.show = false;

      setTimeout(() => {
        this.show = true;
        this.cdk.detectChanges();
      })
    }

    const form = this.reactiveFormGroup;
    if (form) {
      const controls = form.controls;

      if (controls) {
        for (const controlKey in controls) {
          const control = (controls as any)[controlKey];

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
  }

  onClearForms() {
    this.reactiveFormGroup?.reset();
  }

  constructor(private cdk: ChangeDetectorRef) {
  }
}
