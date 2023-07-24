import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {MatInputModule} from "@angular/material/input";
import {NgxMatSelectModule} from "../../../ngx-mat-select";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    NgxMatSelectModule,
    MatButtonModule
  ]
})
export class FooterModule { }
