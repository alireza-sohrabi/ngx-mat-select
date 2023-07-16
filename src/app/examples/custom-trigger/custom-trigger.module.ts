import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMatSelectModule} from "../../ngx-mat-select/pubilc_api";
import {CustomTriggerComponent} from "./custom-trigger.component";


@NgModule({
  declarations: [CustomTriggerComponent],
  imports: [
    CommonModule, MatCardModule, FormsModule, NgxMatSelectModule, MatFormFieldModule
  ],
  exports: [CustomTriggerComponent]
})
export class CustomTriggerModule {
}
