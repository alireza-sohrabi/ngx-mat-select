import {
  NgDocDefaultSearchEngine,
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
  provideNgDocApp,
  provideMainPageProcessor,
  providePageSkeleton,
  provideSearchEngine,
} from '@ng-doc/app';
import {NG_DOC_ROUTING, provideNgDocContext} from '@ng-doc/generated';
import {RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NGX_MAT_SELECT_CONFIG, NgxMatSelectConfig} from 'ngx-mat-select';
import {NgDocThemeToggleComponent} from '@ng-doc/app/components/theme-toggle';

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
    NgDocThemeToggleComponent,
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
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
    provideNgDocContext(),
    provideSearchEngine(NgDocDefaultSearchEngine),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
