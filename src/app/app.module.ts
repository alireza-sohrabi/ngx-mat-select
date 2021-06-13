import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxMatSelectModule} from "./ngx-mat-select/ngx-mat-select.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SingleSelectExampleComponent} from './examples/single-select-example/single-select-example.component';
import {MultiSelectExampleComponent} from './examples/multi-select-example/multi-select-example.component';
import {InfiniteScrollExampleComponent} from './examples/infinite-scroll-example/infinite-scroll-example.component';
import {MobileViewExampleComponent} from './examples/mobile-view-example/mobile-view-example.component';
import {InfiniteScrollServerSideExampleComponent} from './examples/infinite-scroll-server-side-example/infinite-scroll-server-side-example.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatExpansionModule} from "@angular/material/expansion";
import {NGX_MAT_SELECT_CONFIGS, NgxMatSelectConfigs} from "./ngx-mat-select/ngx-mat-select-configs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataBindingsExampleComponent} from './examples/data-bindings-example/data-bindings-example.component';

export const ngxMatSelectConfigs: NgxMatSelectConfigs = {
  maxWidthForMobileView: 600,
  inFirstLoadCallSearcher: true,
  inFirstLoadSearcherValue: '',
  emptyLabel: 'no entry found',
  noMoreResultLabel: 'no more found',
  useInfiniteScroll: false,
  searchBoxPlaceholder: 'please search',
  maximumResultForShow: 40,
  useMobileView: false,
  valueMember: 'key',
  displayMember: 'value',
  mobileViewType: 'FullScreen'
}

@NgModule({
  declarations: [
    AppComponent,
    SingleSelectExampleComponent,
    MultiSelectExampleComponent,
    InfiniteScrollExampleComponent,
    MobileViewExampleComponent,
    InfiniteScrollServerSideExampleComponent,
    DataBindingsExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    NgxMatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: NGX_MAT_SELECT_CONFIGS, useValue: ngxMatSelectConfigs}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
