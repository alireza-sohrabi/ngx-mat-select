import {InjectionToken} from "@angular/core";

export class NgxMatSelectConfigs {
  emptyLabel?: string = 'No results found';
  searchBoxPlaceholder?: string = 'Search ...';
  // selectedItemsLabel: string = "Selected Item(s)";
  maximumResultForShow? = 30;
  valueMember? = 'id';
  displayMember? = 'name';
  maxWidthForMobileView?: number = 599.9;
  useMobileView? = true;
  mobileViewType?: 'FullScreen' | 'BottomSheet' = 'FullScreen';
  noMoreResultLabel?: string;
  useInfiniteScroll?: boolean;
  inFirstLoadCallSearcher?: boolean;
  inFirstLoadSearcherValue?: string;
}

export const NGX_MAT_SELECT_CONFIGS = new InjectionToken<NgxMatSelectConfigs>('NGX_MAT_SELECT_CONFIGS');
