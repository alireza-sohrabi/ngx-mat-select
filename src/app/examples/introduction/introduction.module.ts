import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroductionComponent} from "./introduction.component";
import {NgxMatSelectModule} from "../../ngx-mat-select";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    NgxMatSelectModule,
    MatInputModule,
  ],
  exports: [IntroductionComponent]
})
export class IntroductionModule {
}
