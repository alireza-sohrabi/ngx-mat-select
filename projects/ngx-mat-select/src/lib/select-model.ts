import {InjectionToken} from '@angular/core';

/**
 * an interface to handle server-side query params request
 */
export interface NgxMatSelectSearchParams {
  searchTerm: string;
  pageNumber: number;
  pageSize: number;
}

/**
 * selectionChange event interface
 */
export interface NgxMatSelectionChangeEvent {
  selected: boolean;
  value: unknown;
}

/**
 * all the kind of the views for the multiple select-box trigger
 */
export type NgxMatSelectMultipleDisplay = 'oneRowChip' | 'multipleRowChip' | 'text';

/**
 * some good class to show the panel
 */
export type NgxMatSelectViewType = 'FullScreen' | 'BottomSheet' | 'Default';

/**
 * 'primitive' means the value can be 'boolean', 'number', 'string' and the object means the value can be key-value 'object',
 * and unknown means there was no any option to detect the type from it
 */
export type NgxMatSelectOptionType = 'primitive' | 'object' | 'unknown';

/**
 * Object that can be used to configure the default options for the select-search-box module
 */
export interface NgxMatSelectSearchBoxConfigs {
  searchBoxPlaceholder?: string;
  hasSearchBox?: boolean;
}

/** Object that can be used to configure the default options for the select module. */
export interface NgxMatSelectConfig extends NgxMatSelectSearchBoxConfigs {
  viewType?: NgxMatSelectViewType;

  hasBackButton?: boolean;

  /**
   * how to show the selected options inside the form-field when the multiple value it's true
   */
  multipleDisplay?: NgxMatSelectMultipleDisplay;

  /**
   * A property to uniquely identify a value in options.
   */
  dataKey?: string;

  /**
   * Name of the label field of an option
   */
  optionLabel?: string;

  /**
   * Name of the value field of an option.
   */
  optionValue?: string;

  /**
   /**
   * Width of the panel. If set to `auto`, the panel will match the trigger width.
   * If set to null or an empty string, the panel will grow to match the longest option's text.
   */
  panelWidth?: string | number | null;

  /** Class or list of classes to be applied to the menu's overlay panel. */
  overlayPanelClass?: string | string[];

  /**
   * the height of an option, it's really important to handle the virtual scroll
   */
  optionHeight?: number;

  /**
   * the height of the panel
   */
  panelHeight?: number | null;
}

/** Injection token that can be used to provide the default options the select module. */
export const NGX_MAT_SELECT_CONFIG = new InjectionToken<NgxMatSelectConfig>('NGX_MAT_SELECT_CONFIG');

/**
 * a type for the provided value in select
 */
export interface NgxMatSelectValue {
  value: unknown[] | undefined | null;
  shouldBeSyncedWithSelection: boolean;
}
