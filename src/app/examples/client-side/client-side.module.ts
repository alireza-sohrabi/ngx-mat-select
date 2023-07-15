import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {NgxMatSelectModule} from "../../ngx-mat-select/pubilc_api";
import {ClientSideComponent} from "./client-side.component";


@NgModule({
  declarations: [ClientSideComponent],
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
  exports: [
    ClientSideComponent
  ]
})
export class ClientSideModule {
}
