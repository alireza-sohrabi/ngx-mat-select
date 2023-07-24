import {Component} from '@angular/core';
import {NgxMatSelectionChangeEvent} from "../../../ngx-mat-select";

@Component({
  templateUrl: './without-any-value.component.html',
})
export class WithoutAnyValueComponent {
  options = [
    ...Array.from(new Array(2000)).map((_, index) => ({
      name: 'option_' + index,
      id: index,
    })),
  ];
  protected readonly onselectionchange = onselectionchange;


  onSelectionChange(event: NgxMatSelectionChangeEvent) {
    /**
     * do whatever you want like fill a form-control;
     * but if you have set the optionValue the value of the event would be like this option[optionValue]
     */

    console.log(event.value)
  }
}
