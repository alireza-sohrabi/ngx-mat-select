import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMatSelectModule} from "../../ngx-mat-select";
import {ChangeValueComponent} from "./change-value.component";


@NgModule({
  declarations: [ChangeValueComponent],
  imports: [
    CommonModule, FormsModule, NgxMatSelectModule, MatCardModule, MatFormFieldModule
  ],
  exports: [ChangeValueComponent]
})
export class ChangeValueModule {
}
