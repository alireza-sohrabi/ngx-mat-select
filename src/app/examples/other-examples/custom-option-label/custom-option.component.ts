import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './custom-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomOptionComponent {

  options = Array.from(new Array(2000)).map((_, index) => index);
}
