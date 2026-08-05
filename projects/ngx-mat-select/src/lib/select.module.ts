import {NgModule} from '@angular/core';
import {MatOptionModule} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkOverlayOrigin} from '@angular/cdk/overlay';

import {SharedModule} from './shared/shared.module';
import {NgxMatSelectComponent} from './select';
import {NgxMatSelectFetchOptionsClientSideDirective} from './component/fetch-options/ngx-mat-select-fetch-options-client-side.directive';
import {NgxMatSelectFetchOptionsServerSideDirective} from './component/fetch-options/ngx-mat-select-fetch-options-server-side.directive';
import {NgxMatSelectLoadingModule} from './component/loading/ngx-mat-select-loading.module';
import {NgxMatSelectPanelModule} from './component/panel/ngx-mat-select-panel.module';
import {NgxMatSelectSearchBoxModule} from './component/search-box/ngx-mat-select-search-box.module';
import {NgxMatSelectIconModule} from './component/icon/ngx-mat-select-icon.module';
import {NgxMatSelectTriggerModule} from './component/trigger/ngx-mat-select-trigger.module';
import {NgxMatSelectOptionContentDirective} from './template/ngx-mat-select-option-content.directive';
import {NgxMatSelectTriggerDirective} from './template/ngx-mat-select-trigger.directive';

@NgModule({
  declarations: [
    NgxMatSelectComponent,
    NgxMatSelectFetchOptionsClientSideDirective,
    NgxMatSelectFetchOptionsServerSideDirective,
    NgxMatSelectOptionContentDirective,
    NgxMatSelectTriggerDirective,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    CdkOverlayOrigin,
    SharedModule,
    NgxMatSelectLoadingModule,
    NgxMatSelectPanelModule,
    NgxMatSelectSearchBoxModule,
    NgxMatSelectIconModule,
    NgxMatSelectTriggerModule,
    MatOptionModule,
  ],
  exports: [
    NgxMatSelectComponent,
    NgxMatSelectFetchOptionsClientSideDirective,
    NgxMatSelectFetchOptionsServerSideDirective,
    NgxMatSelectOptionContentDirective,
    NgxMatSelectTriggerDirective,
  ],
})
export class NgxMatSelectModule {}
