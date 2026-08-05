import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkConnectedOverlay, OverlayModule} from '@angular/cdk/overlay';

import {NgxMatSelectPanelComponent} from './ngx-mat-select-panel.component';

@NgModule({
  declarations: [NgxMatSelectPanelComponent],
  imports: [CommonModule, OverlayModule, CdkConnectedOverlay],
  exports: [NgxMatSelectPanelComponent],
})
export class NgxMatSelectPanelModule {}
