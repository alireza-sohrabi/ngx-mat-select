import {Component} from '@angular/core';
import {NgxMatSelectMultipleDisplay} from "../../../ngx-mat-select";

@Component({
  templateUrl: './multiple-display-type.component.html',
})
export class MultipleDisplayTypeComponent {
  multipleDisplay: NgxMatSelectMultipleDisplay = 'multipleRowChip';
  multipleViewTypes: NgxMatSelectMultipleDisplay[] = ['oneRowChip', 'multipleRowChip', 'text'];
  value = ['option_10', 'option_100', 'option_50', 'option_35', 'option_77' ]
  options = Array.from(new Array(2000)).map((_, index) => `option_${index}`);

}
