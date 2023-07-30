import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ConfigComponent} from "./config.component";


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,

  ],
  exports: [ConfigComponent]
})
export class ConfigModule {
}
