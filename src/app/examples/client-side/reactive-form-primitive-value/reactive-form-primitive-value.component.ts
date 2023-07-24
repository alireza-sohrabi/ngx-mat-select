import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './reactive-form-primitive-value.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormPrimitiveValueComponent {

  reactiveFormGroup = new FormGroup({
    selectValue: new FormControl([
      /**
       * values are primitive number
       */
      1, 2, 160
    ]),
  });


  /**
   * items of options are object
   */
  options = [
    ...Array.from(new Array(2000)).map((_, index) => ({
      name: 'option_' + index,
      id: index,
    })),
  ];
}
