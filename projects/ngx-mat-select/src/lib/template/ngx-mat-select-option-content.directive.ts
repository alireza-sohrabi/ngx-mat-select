import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxMatSelectOptionContent]',
})
/**
 * to show the custom template inside the options
 */
export class NgxMatSelectOptionContentDirective {
  constructor(public template: TemplateRef<{isSelected: boolean, $implicit: any}>) {}
}
