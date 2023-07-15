import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMatSelectOptionDirective} from './ngx-mat-select-option.directive';
import {ToOptionLabelPipe} from './option-label.pipe';

@NgModule({
  declarations: [NgxMatSelectOptionDirective, ToOptionLabelPipe],
  imports: [CommonModule],
  exports: [NgxMatSelectOptionDirective, ToOptionLabelPipe],
  providers: [ToOptionLabelPipe],
})
export class SharedModule {}
