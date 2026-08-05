import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {NgxMatSelectLoadingComponent} from './ngx-mat-select-loading.component';

@NgModule({
  declarations: [NgxMatSelectLoadingComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [NgxMatSelectLoadingComponent],
})
export class NgxMatSelectLoadingModule {}
