import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './reactive-form-object-value.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormObjectValueComponent {

  reactiveFormGroup = new FormGroup({
    /**
     * value items are object
     */
    selectValue: new FormControl([
      /**
       * when you provide a value which is not present in the options,
       * automatically will be deleted by the select box
       */
      {
        id: 2500,
        name: `Reactive Form_${2500}`,
      },
      {id: 1, name: `Reactive Form_${1}`},
      {id: 2, name: `Reactive Form_${2}`},
      {
        id: 160,
        name: `Reactive Form_${160}`,
      },

    ]),
  });


  /**
   * options are object
   */
  options = [
    ...Array.from(new Array(2000)).map((_, index) => ({
      name: 'Reactive Form_' + index,
      id: index,
    })),
  ];
}
