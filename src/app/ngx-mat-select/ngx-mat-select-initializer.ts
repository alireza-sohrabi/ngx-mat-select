import {Injectable, Injector, PLATFORM_ID} from "@angular/core";
import {MediaMatcher} from "@angular/cdk/layout";
import {of} from 'rxjs';
import {DOCUMENT, isPlatformServer} from "@angular/common";
import {NgxMatSelectService} from "./ngx-mat-select.service";
import {NgxMatSelectConfigs} from "./ngx-mat-select-configs";

@Injectable({providedIn: 'root'})
export class NgxMatSelectInitializer {
  matSelectSearchService: NgxMatSelectService
  mobileQuery: MediaQueryList;
  media: MediaMatcher;
  document: Document;
  private _mobileQueryListenerFunc: any;
  private platformId: any;
  private _mobileQueryListener = () => {
    if (this.mobileQuery) {
      this._handleClasses(this.mobileQuery.matches);
    }
  }
  configs: NgxMatSelectConfigs;

  private _handleClasses(matches: boolean): void {
    if (matches) {
      if (!document.documentElement.classList.contains('ngx-mat-mobile')) {
        document.documentElement.classList.add('ngx-mat-mobile');
      }
    } else {
      document.documentElement.classList.remove('ngx-mat-mobile');
    }
  }

  constructor(injector: Injector) {
    this.media = injector.get(MediaMatcher);
    this.platformId = injector.get(PLATFORM_ID);
    this.configs = injector.get(NgxMatSelectService).configs;
    this.document = injector.get(DOCUMENT);
  }

  init(): () => Promise<boolean> {
    return () => {
      if (isPlatformServer(this.platformId)) {

        return of(true).toPromise();
      }
      return new Promise<any>((resolve, reject) => {
        if (window.screen.width <= this.configs.maxWidthForMobileView) {
          this._mobileQueryListener();
        }
        this.mobileQuery = this.media.matchMedia('(max-width: '
          + this.configs.maxWidthForMobileView
          + 'px)');
        this._mobileQueryListenerFunc = this._mobileQueryListener.bind(this);
        this.mobileQuery.addListener(this._mobileQueryListenerFunc);
        this._handleClasses(this.document.documentElement.clientWidth <= this.configs.maxWidthForMobileView)
        {
          this._handleClasses(this.mobileQuery.matches);
        }
        return resolve();
      });
    }
  }
}
