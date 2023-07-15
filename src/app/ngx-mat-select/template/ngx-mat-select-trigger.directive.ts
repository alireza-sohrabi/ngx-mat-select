import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxMatSelectTrigger]',
})
/**
 * to show a custom template for the selected options inside the form-field
 */
export class NgxMatSelectTriggerDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
