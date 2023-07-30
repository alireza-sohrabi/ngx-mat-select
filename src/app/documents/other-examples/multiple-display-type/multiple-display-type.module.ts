import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultipleDisplayTypeComponent} from './multiple-display-type.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMatSelectModule} from "../../../ngx-mat-select";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    MultipleDisplayTypeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    NgxMatSelectModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    MultipleDisplayTypeComponent
  ]
})
export class MultipleDisplayTypeModule {
}
