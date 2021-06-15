import {APP_INITIALIZER, Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMatSelectDirective} from './ngx-mat-select.directive';
import {NgxMatSelectService} from "./ngx-mat-select.service";
import {NgxMatSelectInitializer} from "./ngx-mat-select-initializer";
import {NGX_MAT_SELECT_CONFIGS, NgxMatSelectConfigs} from "./ngx-mat-select-configs";

@NgModule({
  declarations: [NgxMatSelectDirective],
  imports: [
    CommonModule,
  ],
  providers: [
    NgxMatSelectInitializer,
    {
      provide: APP_INITIALIZER, deps: [NgxMatSelectInitializer],
      useFactory: (ngxMatSelectInitializer: NgxMatSelectInitializer) => ngxMatSelectInitializer.init(),
      multi: true
    }
  ],
  exports: [
    NgxMatSelectDirective,
  ],
})
export class NgxMatSelectModule {
  static forRoot(configs?: NgxMatSelectConfigs): ModuleWithProviders<NgxMatSelectModule> {
    if (!configs) {
      configs = new NgxMatSelectConfigs();
    } else {
      configs = Object.assign(new NgxMatSelectConfigs(), configs);
    }
    return {
      ngModule: NgxMatSelectModule,
      providers: [
        {provide: NGX_MAT_SELECT_CONFIGS, useValue: configs},
        NgxMatSelectService,
      ]
    };
  }

}

