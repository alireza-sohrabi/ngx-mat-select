import {Directive, Input} from '@angular/core';
import {MatOption} from '@angular/material/core';

@Directive({
  selector: 'mat-option[ngxMatSelectOption]',
  host: {
    class: 'ngx-mat-select-option',
  },
})
export class NgxMatSelectOptionDirective {
  /**
   * if true the option gets selected
   * @param value
   */
  @Input() set selected(value: boolean) {
    if (value) {
      this.option.select();
    } else {
      this.option.deselect();
    }
  }

  /**
   * if true the option gets activated
   * @param activated
   */
  @Input() set activated(activated: boolean) {
    if (activated) {
      this.option.setActiveStyles();
    } else {
      this.option.setInactiveStyles();
    }
  }

  constructor(private option: MatOption) {
  }
}
