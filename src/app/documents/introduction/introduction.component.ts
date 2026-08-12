import { Component } from '@angular/core';

@Component({
  templateUrl: './introduction.component.html',
  standalone: false,
})
export class IntroductionComponent {
  readonly options = Array.from({length: 10_000}, (_, index) => ({
    id: index + 1,
    name: `Option ${String(index + 1).padStart(5, '0')}`,
  }));
}
