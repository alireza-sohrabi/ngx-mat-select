import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {NgxMatSelectModule} from "../../ngx-mat-select";
import {FetchOptionsComponent} from "./fetch-options/fetch-options.component";
import {ObjectValueComponent} from "./object-value/object-value.component";
import {PrimitiveValueComponent} from "./primitive-value/primitive-value.component";


@NgModule({
  declarations: [FetchOptionsComponent, ObjectValueComponent, PrimitiveValueComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NgxMatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,


  ],
  exports: [FetchOptionsComponent, ObjectValueComponent, PrimitiveValueComponent]
})
export class ServerSideModule {
}
