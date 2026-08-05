import {
  NgDocDefaultSearchEngine,
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
  provideNgDocApp,
  provideSearchEngine,
} from '@ng-doc/app';
import {NG_DOC_ROUTING, provideNgDocContext} from '@ng-doc/generated';
import {RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NGX_MAT_SELECT_CONFIG, NgxMatSelectConfig} from 'ngx-mat-select';

export const ngxMatSelectConfigs: NgxMatSelectConfig = {}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    RouterModule.forRoot([...NG_DOC_ROUTING,
      {path: '', redirectTo: 'introduction', pathMatch: 'full'},
      {path: "**", redirectTo: 'introduction', pathMatch: 'full'}], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 70],
      useHash: true
    }),
  ],
  providers: [
    {provide: NGX_MAT_SELECT_CONFIG, useValue: ngxMatSelectConfigs},
    provideNgDocApp(),
    provideNgDocContext(),
    provideSearchEngine(NgDocDefaultSearchEngine)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
