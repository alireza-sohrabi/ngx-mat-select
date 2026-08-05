import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-mat-select-loading',
  templateUrl: './ngx-mat-select-loading.component.html',
  styleUrls: ['./ngx-mat-select-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * a loading inside the panel when there is a delay in loading the data
 */
export class NgxMatSelectLoadingComponent {
  /**
   * if ture the spinner gets appeared
   */
  @Input() loading = false;
}
