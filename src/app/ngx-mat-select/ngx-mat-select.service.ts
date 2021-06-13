import {Inject, Injectable, Optional} from '@angular/core';
import {NGX_MAT_SELECT_CONFIGS, NgxMatSelectConfigs} from "./ngx-mat-select-configs";

@Injectable({
  providedIn: 'root'
})
export class NgxMatSelectService {
  configs: NgxMatSelectConfigs

  constructor(@Optional() @Inject(NGX_MAT_SELECT_CONFIGS) _configs: NgxMatSelectConfigs
  ) {
    this.configs = Object.assign(new NgxMatSelectConfigs(), _configs);
  }

}
