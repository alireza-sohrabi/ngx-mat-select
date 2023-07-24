import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeComponent } from './customize.component';
import {NgxMatSelectModule} from "../../../ngx-mat-select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ConfigModule} from "./config/config.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CustomizeComponent
  ],
  imports: [
    CommonModule,
    NgxMatSelectModule,
    MatFormFieldModule,
    ConfigModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    CustomizeComponent
  ]
})
export class CustomizeModule { }
