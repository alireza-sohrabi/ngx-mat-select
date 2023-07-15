import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NGX_MAT_SELECT_CONFIG, NgxMatSelectConfig} from './ngx-mat-select/pubilc_api';
import {ExamplesModule} from "./examples/examples.module";

export const ngxMatSelectConfigs: NgxMatSelectConfig = {}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ExamplesModule
  ],
  providers: [
    {provide: NGX_MAT_SELECT_CONFIG, useValue: ngxMatSelectConfigs}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
