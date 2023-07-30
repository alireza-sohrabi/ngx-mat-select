import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {GlobalConfigComponent} from "./global-config.component";


@NgModule({
  declarations: [GlobalConfigComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [GlobalConfigComponent]
})
export class GlobalConfigModule {
}
