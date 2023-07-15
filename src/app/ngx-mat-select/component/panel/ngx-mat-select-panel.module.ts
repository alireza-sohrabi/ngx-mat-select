import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkConnectedOverlay} from '@angular/cdk/overlay';

import {NgxMatSelectPanelComponent} from './ngx-mat-select-panel.component';

@NgModule({
  declarations: [NgxMatSelectPanelComponent],
  imports: [CommonModule, CdkConnectedOverlay],
  exports: [NgxMatSelectPanelComponent],
})
export class NgxMatSelectPanelModule {}
