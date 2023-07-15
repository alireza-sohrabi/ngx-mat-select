import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

import {NgxMatSelectTriggerComponent} from './ngx-mat-select-trigger.component';
import {NgxMatSelectIconModule} from '../icon/ngx-mat-select-icon.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [NgxMatSelectTriggerComponent],
  imports: [CommonModule, MatChipsModule, NgxMatSelectIconModule, SharedModule],
  exports: [NgxMatSelectTriggerComponent],
})
export class NgxMatSelectTriggerModule {}
