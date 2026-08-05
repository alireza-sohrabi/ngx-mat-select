import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-mat-select-icon',
  templateUrl: './ngx-mat-select-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMatSelectIconComponent {
  /**
   * icon type
   */
  @Input() icon?: 'Times' | 'ArrowRight' | 'Search' | 'Remove' | 'ArrowDown';
  /**
   * the width of the icon in number
   */
  @Input() width = 24;

  /**
   * the height of the icon in number
   */
  @Input() height = 24;
}
