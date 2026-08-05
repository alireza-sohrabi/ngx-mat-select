import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './custom-trigger.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CustomTriggerComponent {
  options = Array.from(new Array(2000)).map((_, index) => index);
}
