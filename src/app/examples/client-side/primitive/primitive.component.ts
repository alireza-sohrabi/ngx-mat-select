import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './primitive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimitiveComponent {
  reactiveFormGroup = new FormGroup({
    selectValue: new FormControl([
      /**
       * values are primitive number
       */
      'option_50', 'option_20', 'option_160'
    ]),
  });


  /**
   * options are primitive
   */
  options = [
    ...Array.from(new Array(2000)).map((_, index) =>
      'option_' + index,
    ),
  ];
}
