import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMatSelectModule} from "../../ngx-mat-select/pubilc_api";
import {CustomOptionComponent} from "./custom-option.component";


@NgModule({
  declarations: [CustomOptionComponent],
  imports: [
    CommonModule, FormsModule, NgxMatSelectModule, MatCardModule, MatFormFieldModule
  ],
  exports: [
    CustomOptionComponent
  ]
})
export class CustomOptionModule {
}
