import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {NgxMatSelectModule} from "../../ngx-mat-select";
import {WithoutAnyValueComponent} from "./without-any-value/without-any-value.component";
import {ConfigModule} from "../other-examples/customize/config/config.module";
import {PrimitiveComponent} from "./primitive/primitive.component";
import {
  ReactiveFormPrimitiveValueComponent
} from "./reactive-form-primitive-value/reactive-form-primitive-value.component";
import {ReactiveFormObjectValueComponent} from "./reactive-form-object-value/reactive-form-object-value.component";
import {MatListModule} from "@angular/material/list";
import {OptionsAtOnceComponent} from "./options-at-once/options-at-once.component";
import {SearchBoxComparisonComponent} from "./search-box-comparison/search-box-comparison.component";


@NgModule({
  declarations: [
    WithoutAnyValueComponent,
    PrimitiveComponent,
    ReactiveFormPrimitiveValueComponent,
    ReactiveFormObjectValueComponent,
    OptionsAtOnceComponent,
    SearchBoxComparisonComponent
  ],
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
    ConfigModule,
    MatListModule,
  ],
  exports: [
    WithoutAnyValueComponent,
    PrimitiveComponent,
    ReactiveFormPrimitiveValueComponent,
    ReactiveFormObjectValueComponent,
    OptionsAtOnceComponent,
    SearchBoxComparisonComponent
  ]
})
export class ClientSideModule {
}
