import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {NgxMatSelectModule} from "../../ngx-mat-select/pubilc_api";
import {UsePrimitivesComponent} from "./use-primitives.component";


@NgModule({
  declarations: [UsePrimitivesComponent],
  imports: [
    CommonModule, MatCardModule, MatFormFieldModule, NgxMatSelectModule, FormsModule
  ],
  exports: [UsePrimitivesComponent]
})
export class UsePrimitivesModule {
}
