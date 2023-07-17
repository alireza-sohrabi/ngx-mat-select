import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxMatSelectPanelComponent} from './ngx-mat-select-panel.component';
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [NgxMatSelectPanelComponent],
  imports: [CommonModule, OverlayModule],
  exports: [NgxMatSelectPanelComponent],
})
export class NgxMatSelectPanelModule {
}
