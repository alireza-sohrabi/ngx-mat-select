import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgxMatSelectSearchBoxComponent} from './ngx-mat-select-search-box.component';
import {NgxMatSelectIconModule} from '../icon/ngx-mat-select-icon.module';

@NgModule({
  declarations: [NgxMatSelectSearchBoxComponent],
  imports: [CommonModule, FormsModule, NgxMatSelectIconModule],
  exports: [NgxMatSelectSearchBoxComponent],
})
export class NgxMatSelectSearchBoxModule {}
