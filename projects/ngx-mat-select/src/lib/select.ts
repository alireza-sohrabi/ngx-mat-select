import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  isDevMode,
  OnChanges,
  OnInit,
  Optional,
  Output,
  QueryList,
  Renderer2,
  Self,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
  NgForm,
  Validators,
} from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import {
  MatOption,
  MatOptionSelectionChange,
  MAT_OPTION_PARENT_COMPONENT,
  ErrorStateMatcher,
} from '@angular/material/core';

import { Observable, of, ReplaySubject, Subject } from 'rxjs';

import { NgxMatSelectPanelComponent } from './component/panel/ngx-mat-select-panel.component';
import { NgxMatSelectSearchBoxComponent } from './component/search-box/ngx-mat-select-search-box.component';
import { NgxMatSelectOptionContentDirective } from './template/ngx-mat-select-option-content.directive';
import { NgxMatSelectTriggerDirective } from './template/ngx-mat-select-trigger.directive';
import {
  NGX_MAT_SELECT_CONFIG,
  NgxMatSelectConfig,
  NgxMatSelectionChangeEvent,
  NgxMatSelectMultipleDisplay,
  NgxMatSelectValue,
  NgxMatSelectViewType,
} from './select-model';
import { matSelectAnimations } from './shared/animations';
import { NgxMatSelectFetchOptions } from './component/fetch-options/ngx-mat-select-fetch-options';
import { isNullOrUndefined } from './shared/utils';
import { filter, map, take } from 'rxjs/operators';
import { getSelectDynamicMultipleError } from './select-error';

let nextUniqueId = 0;

@Component({
  selector: 'ngx-mat-select',
  templateUrl: 'select.html',
  styleUrls: ['select.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [matSelectAnimations.transformPanelWrap],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ngxMatSelect',
  host: {
    role: 'combobox',
    'aria-autocomplete': 'none',
    'aria-haspopup': 'listbox',
    class: 'ngx-mat-select',
    '[attr.id]': 'id',
    '[attr.tabindex]': 'disabled ? -1 : tabIndex',
    '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
    '[attr.aria-activedescendant]': 'activeDescendant',
    '[attr.aria-expanded]': 'panelOpen',
    '[attr.aria-label]': 'ariaLabel || null',
    '[attr.aria-labelledby]': 'resolvedAriaLabelledby',
    '[attr.aria-required]': 'required.toString()',
    '[attr.aria-disabled]': 'disabled.toString()',
    '[attr.aria-invalid]': 'errorState',
    ngSkipHydration: '',
    '[class.ngx-mat-select-disabled]': 'disabled',
    '[class.ngx-mat-select-invalid]': 'errorState',
    '[class.ngx-mat-select-required]': 'required',
    '[class.ngx-mat-select-empty]': 'empty',
    '[class.ngx-mat-select-multiple]': 'multiple',
    '(keydown)': '_handleKeydown($event)',
    '(focus)': '_onFocus()',
    '(blur)': '_onBlur()',
  },
  providers: [
    {
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: NgxMatSelectComponent,
    },
    { provide: MatFormFieldControl, useExisting: NgxMatSelectComponent },
  ],
  standalone: false,
})
/**
 * a select box to select multiple and single options from some provided options
 * this works with MatFormField
 */
export class NgxMatSelectComponent
  implements
    ControlValueAccessor,
    NgxMatSelectConfig,
    NgxMatSelectFetchOptions,
    DoCheck,
    MatFormFieldControl<unknown>,
    OnChanges,
    OnInit
{
  /** Emits when the state exposed to the parent form field changes. */
  readonly stateChanges = new Subject<void>();

  @Input() disableRipple = false;
  @Input() tabIndex = 0;
  @Input() errorStateMatcher?: ErrorStateMatcher;

  private _disabled = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  errorState = false;

  isOptionDisabled(option: unknown): boolean {
    return !!(
      option &&
      typeof option === 'object' &&
      'disabled' in option &&
      (option as { disabled?: unknown }).disabled
    );
  }

  updateErrorState(): void {
    const matcher = this.errorStateMatcher ?? this._defaultErrorStateMatcher;
    const parent = this._parentFormGroup ?? this._parentForm;
    const nextState = matcher.isErrorState(this.ngControl?.control ?? null, parent);

    if (nextState !== this.errorState) {
      this.errorState = nextState;
      this.stateChanges.next();
    }
  }
  /**
   * the options which are visible in the panel
   */
  @ViewChildren(MatOption) visibleOptions!: QueryList<MatOption>;

  /**
   * the custom content of the form-field to show
   */
  @ContentChild(NgxMatSelectTriggerDirective)
  triggerContent?: NgxMatSelectTriggerDirective;

  /**
   * a template which carries the content of an option
   */
  @ContentChild(NgxMatSelectOptionContentDirective)
  selectOptionContent?: NgxMatSelectOptionContentDirective | null;

  /**
   * the search box that we also use it for initializing the filtered options
   */
  @ViewChild(NgxMatSelectSearchBoxComponent)
  searchBoxComponent?: NgxMatSelectSearchBoxComponent;

  /**
   * the cdk virtual scroll viewport
   */
  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;

  /**
   * the panel which is connected to the form-field
   */
  @ViewChild(NgxMatSelectPanelComponent) panel!: NgxMatSelectPanelComponent;

  /** Event emitted when the select panel has been toggled. */
  @Output() readonly openedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  /**
   * to emits a new event, whenever the client select or deselect that item
   */
  @Output() selectionChange = new EventEmitter<NgxMatSelectionChangeEvent>();

  /** Event emitted when the select has been opened. */
  @Output() readonly opened: Observable<void> = this.openedChange.pipe(
    filter((o) => o),
    map(() => {})
  );

  /** Event emitted when the select has been closed. */
  @Output() readonly closed: Observable<void> = this.openedChange.pipe(
    filter((o) => !o),
    map(() => {})
  );

  /**
   * Event that emits whenever the raw value of the select changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   * @docs-private
   */
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  /**
   * if it's false we can just select one item from the options
   */
  @Input()
  get multiple() {
    return this._multiple;
  }

  set multiple(value: boolean) {
    if (this.selectionModel && isDevMode()) {
      throw getSelectDynamicMultipleError();
    }

    this._multiple = coerceBooleanProperty(value);
  }

  private _multiple = false;

  /** Aria label of the select. */
  @Input('aria-label') ariaLabel = '';

  /** IDs of elements that label the select. */
  @Input('aria-labelledby') ariaLabelledby?: string;

  /** Explicit label IDs, or the label supplied by the parent Material form field. */
  get resolvedAriaLabelledby(): string | null {
    return this.ariaLabelledby || this._parentFormField?.getLabelId() || null;
  }

  /**
   * to show a button next to the search-box to close the panel
   */
  @Input() hasBackButton?: boolean =
    this.defaultOptions?.hasBackButton ?? false;

  /** Text shown when the current query has no matching options. */
  @Input() noOptionsText =
    this.defaultOptions?.noOptionsText ?? 'No options found';

  /** Text announced while options are loading. */
  @Input() loadingText = this.defaultOptions?.loadingText ?? 'Loading options';

  /** Text shown when a server-side option request fails. */
  @Input() errorText =
    this.defaultOptions?.errorText ?? 'Options could not be loaded';

  /** Label for the retry action shown after a server-side request failure. */
  @Input() retryText = this.defaultOptions?.retryText ?? 'Try again';

  /** Accessible name for the panel close button. */
  @Input() backButtonAriaLabel =
    this.defaultOptions?.backButtonAriaLabel ?? 'Close options';

  /**
   * recommended to use dataKey instead of compareWith,
   * Function to compare the option values with the selected values. The first argument is a value from an option.
   * The second is a value from the selection. A boolean should be returned.
   */
  @Input()
  compareWith?: (o1: any, o2: any) => boolean;

  /**
   * the height of an option, it's really important to handle the virtual scroll
   * the default value is 48
   */
  @Input() optionHeight?: number = this.defaultOptions?.optionHeight ?? 48;

  /**
   * the height of the panel of the options
   * the default value is 350
   */
  @Input() panelHeight?: number | null | undefined =
    this.defaultOptions?.panelHeight ?? 350;

  /**
   * it can be 'Default', 'FullScreen' or 'BottomSheet'
   * 'Default' means the panel will be showed connected to the form-filed
   * 'FullScreen' means the panel will be opened in full-screen mode
   * 'BottomSheet' means the panel will be opened from bottom to semi top
   */
  @Input() viewType?: NgxMatSelectViewType =
    this.defaultOptions?.viewType ?? 'Default';

  /**
   * Width of the panel. If set to `auto`, the panel will match the trigger width.
   * If set to null or an empty string, the panel will grow to match the longest option's text.
   * the default value is 'auto'
   */
  @Input() panelWidth: string | number | null | undefined =
    this.defaultOptions && typeof this.defaultOptions.panelWidth !== 'undefined'
      ? this.defaultOptions.panelWidth
      : 'auto';

  /** Classes to be passed to the select panel. Supports the same syntax as `ngClass`. */
  @Input() panelClass:
    | string
    | string[]
    | Set<string>
    | { [key: string]: any } = [];

  /**
   * Name of the label field of an option
   * it can be undefined, when options are simple primitive values such as a string array
   */
  @Input() optionLabel?: string = this.defaultOptions?.optionLabel;

  /**
   * Name of the value field of an option.
   * If optionValue is omitted and the object has no value property, the object itself becomes the value of an option. Note that,
   * when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary
   */
  @Input() optionValue: string | undefined = this.defaultOptions?.optionValue;

  /**
   * A property to uniquely identify a value in options.
   * it would use to compare option with value
   */
  @Input() dataKey?: string;

  /**
   * how to show the selected options inside the form-field when the multiple value it's true
   * the default value is 'text'
   */
  @Input() multipleDisplay?: NgxMatSelectMultipleDisplay =
    this.defaultOptions?.multipleDisplay ?? 'text';

  /** Placeholder to be shown if no value has been selected. */
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string | undefined | null) {
    this._placeholder = isNullOrUndefined(value) ? '' : value;
    this.stateChanges.next();
  }

  private _placeholder!: string;

  /** Unique id of the element. */
  @Input()
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }

  private _id!: string;

  /** Whether the component is required. */
  @Input()
  get required(): boolean {
    return (
      this._required ??
      this.ngControl?.control?.hasValidator(Validators.required) ??
      false
    );
  }

  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  private _required: boolean | undefined;

  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  @Input('aria-describedby') userAriaDescribedBy?: string;

  /** Value of the select control. */
  @Input()
  get value(): any {
    return this._toFlat(this.getValue());
  }

  set value(newValue: any) {
    this.setValue(newValue, true, false);
    this._onChange(newValue);
  }

  /**
   * if it's true the search box will be showed, the default value is false
   */
  hasSearchBox = this.defaultOptions?.hasSearchBox ?? false;

  /**
   * a placeholder for the search-box to be shown if nothing is written in the search-box
   */
  searchBoxPlaceholder = this.defaultOptions?.searchBoxPlaceholder ?? '';

  /** Accessible name announced for the option search field. */
  @Input() searchBoxAriaLabel =
    this.defaultOptions?.searchBoxAriaLabel ?? 'Search options';

  /** Accessible name for the search clear button. */
  @Input() clearSearchAriaLabel =
    this.defaultOptions?.clearSearchAriaLabel ?? 'Clear search';

  /** Ideal origin for the overlay panel. */
  preferredOverlayOrigin?: ElementRef;

  /**
   * the selection model which enhances the selecting actions like deselect and select and so on
   */
  selectionModel?: SelectionModel<unknown>;

  /**
   * the options that will be appeared in the screens
   */
  filteredOptions$: Observable<unknown[]> = of([]);

  /**
   * a loading flag at button of the panel list when we are using the server-side fetching data
   */
  loading$: Observable<boolean> = of(false);

  /** The latest server-side loading error, if one occurred. */
  error$: Observable<unknown | null> = of(null);

  /** Retries the latest server-side option request. */
  retryFetch: () => void = () => {};

  /**
   * an observable carries the value, storing the latest value of the select-box.
   * the value always is an array, and when we have no value the value
   * would be an empty array
   * the select search directive would subscribe this value to update the selected items
   */
  value$: Observable<NgxMatSelectValue>;

  /**
   * to set the active option
   */
  activeItemIndex?: string;

  /** A name for this control that can be used by `mat-form-field`. */
  controlType = 'ngx-mat-select';

  /**
   * Keeps track of the previous form control assigned to the select.
   * Used to detect if it has changed.
   */
  _previousControl: AbstractControl | null | undefined;

  /** Class or list of classes to be applied to the menu's overlay panel. */
  _overlayPanelClass: string | string[] =
    this.defaultOptions?.overlayPanelClass || '';

  /** Whether the select has a value. */
  get empty(): boolean {
    return !this.selectionModel || this.selectionModel.isEmpty();
  }

  /** Whether the select is focused. */
  get focused(): boolean {
    return this._focused || this.panelOpen;
  }

  private _focused = false;

  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat(): boolean {
    return (
      this.panelOpen || !this.empty || (this._focused && !!this._placeholder)
    );
  }

  /**
   * to store the scroll-top of the virtual scroll
   * and apply it to the virtual scroll container  whenever it gets open
   * @private
   */

  private scrollTop = 0;

  /** Unique id for this input. */
  private _uid = `ngx-mat-select-${nextUniqueId++}`;

  /**
   * a type of subject to get the control of the value observable, storing the latest value of the form
   * @private
   */
  private value$$ = new ReplaySubject<NgxMatSelectValue>(1);

  constructor(
    public _changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private readonly _defaultErrorStateMatcher: ErrorStateMatcher,
    public readonly _elementRef: ElementRef,
    @Attribute('tabindex') tabIndex: string,
    @Optional() private readonly _parentForm: NgForm | null,
    @Optional() private readonly _parentFormGroup: FormGroupDirective | null,
    @Optional()
    @Inject(MAT_FORM_FIELD)
    protected _parentFormField: MatFormField,
    @Self() @Optional() public readonly ngControl: NgControl | null,
    @Optional()
    @Inject(NGX_MAT_SELECT_CONFIG)
    protected defaultOptions: NgxMatSelectConfig
  ) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }

    this.value$ = this.value$$.asObservable();
    this.tabIndex = parseInt(tabIndex) || 0;

    // Force setter to be called in case id was not specified.
    // eslint-disable-next-line no-self-assign
    this.id = this.id;
  }

  ngOnInit(): void {
    this.selectionModel = new SelectionModel<unknown>(
      this.multiple,
      [],
      false,
      this._getCompareWithFn()
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
    // the parent form field know to run change detection when the disabled state changes.
    if (changes['disabled'] || changes['userAriaDescribedBy']) {
      this.stateChanges.next();
    }
  }

  ngDoCheck(): void {
    const ngControl = this.ngControl;

    if (ngControl) {
      // The disabled state might go out of sync if the form group is swapped out.
      if (this._previousControl !== ngControl.control) {
        if (
          this._previousControl !== undefined &&
          ngControl.disabled !== null &&
          ngControl.disabled !== this.disabled
        ) {
          this.disabled = ngControl.disabled;
        }

        this._previousControl = ngControl.control;
      }

      this.updateErrorState();
    }
  }

  /** `View -> model callback called when value changes` */
  _onChange: (value: any) => void = () => {};

  /** `View -> model callback called when select has been touched` */
  _onTouched = () => {};

  /**
   * whenever the form-control gets updated from outside we can use
   * this function to write the latest value in the local state
   * @param value
   */
  writeValue(value: unknown[] | unknown): void {
    this.setValue(value, true, false);
  }

  /**
   * to store the local onChange function
   * @param fn
   */
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  /**
   * to store the local onTouch function
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * to manage being disabled
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }

  /**
   * to remove an item from the selected options
   * @param option
   */
  onDeselect(option: unknown) {
    this.selectionModel?.deselect(option);

    const flatValue = this.getFlatValueFromSelection();
    this.setValue(flatValue, false, true);

    if (!this.panel.isOpen) {
      this.blur();
    } else {
      this.stateChanges.next();
    }

    this.selectionChange.emit({
      selected: false,
      value: this.getOptionValue(option),
    });
  }

  /**
   * to select or deselect an item from selected options
   * @param event
   */
  onSelectionChange(event: MatOptionSelectionChange<unknown>) {
    if (event.isUserInput) {
      const option = event.source.value;

      if (event.source.selected) {
        this.selectionModel?.select(option);
      } else {
        this.selectionModel?.deselect(option);
      }

      const flatValue = this.getFlatValueFromSelection();

      this.setValue(flatValue, false, true);

      if (!this.panel.isOpen) {
        this.blur();
      } else {
        this.stateChanges.next();
      }

      if (!this.multiple) {
        this.panel.close();
      } else {
        this._changeDetectorRef.detectChanges();
        this.panel.updatePosition();
      }

      this.selectionChange.emit({
        selected: event.source.selected,
        value: this.getOptionValue(option),
      });
    }
  }

  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick(event: MouseEvent): void {
    this.panel.open();
  }

  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids: string[]) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute(
        'aria-describedby',
        ids.join(' ')
      );
    } else {
      this._elementRef.nativeElement.removeAttribute('aria-describedby');
    }
  }

  /**
   * we get a hook before the panel gets open
   */
  onBeforePanelOpen() {
    this.activeItemIndex ??= '0';
    this.focus();

    if (this._parentFormField) {
      this.preferredOverlayOrigin =
        this._parentFormField.getConnectedOverlayOrigin();
    }
  }

  /**
   * we get a hook after the panel gets open
   */
  onAfterPanelOpen() {
    this.focus();

    this.renderer.setProperty(
      this.virtualScroll.elementRef.nativeElement,
      'scrollTop',
      this.scrollTop
    );
    setTimeout(() => {
      this.virtualScroll.checkViewportSize();

      const activeOption =
        this.visibleOptions.find((option) => option.active && !option.disabled) ??
        this.visibleOptions.find((option) => !option.disabled);

      if (activeOption) {
        this.activeItemIndex = this.getOptionIndex(activeOption.id);
        this._changeDetectorRef.markForCheck();
      }
    });

    this.openedChange.emit(this.panelOpen);
  }

  /**
   * we get a hook before the panel gets close
   */
  onBeforePanelClose() {
    this.scrollTop = this.virtualScroll.elementRef.nativeElement.scrollTop || 0;
    this.blur();
  }

  /**
   * we get a hook after the panel gets close
   */
  onAfterPanelClose() {
    this.blur();

    this.openedChange.emit(this.panelOpen);
  }

  blur() {
    if (!this.disabled) {
      this._focused = false;
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
      this.searchBoxComponent?.blur();
    }
  }

  focus() {
    if (!this.disabled) {
      this._focused = true;
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
      this.searchBoxComponent?.focus();
    }
  }

  /**
   * to get the value of the specific property (optionValue) from the option
   * @param option
   */
  getOptionValue(option: any) {
    return this.getObjectValue(option, this.optionValue);
  }

  /**
   * to check if an options is selected or not
   */
  isSelected(option: unknown) {
    return this.selectionModel?.isSelected(option) || false;
  }

  /** The currently selected option. */
  get selected(): any | any[] {
    return this.multiple
      ? this.selectionModel?.selected || []
      : this.selectionModel?.selected[0];
  }

  /**
   * to get the latest value of the select-box
   * the value for multiple and single selection is an array,
   * but for single selection the first row is assumed as the value
   */
  getValue() {
    let value: unknown[] | null | undefined;
    this.value$$.pipe(take(1)).subscribe((selectValue) => {
      value = selectValue.value;
    });

    return value || [];
  }

  /**
   * to set the value of the select-box,
   * @param value {unknown} - the value of the form-control
   * @param shouldBeSyncedWithSelection {boolean} - if it's true the selection model will be synced with the value
   * @param emitsValue - to emit and call valueChange and _onChange functions together
   */
  setValue(
    value: unknown[] | unknown,
    shouldBeSyncedWithSelection: boolean,
    emitsValue = false
  ) {
    this.value$$.next({
      value: !isNullOrUndefined(value) ? this._toArray(value) : value,
      shouldBeSyncedWithSelection,
    });

    if (emitsValue) {
      this.valueChange.emit(value);
      this._onChange(value);
    }
  }

  /** Toggles the overlay panel open or closed. */
  toggle(): void {
    this.panelOpen ? this.panel.close() : this.panel.open();
  }

  get panelOpen() {
    return this.panel?.isOpen || false;
  }

  /** ID of the listbox controlled by this combobox. */
  get panelId(): string {
    return `${this.id}-panel`;
  }

  /** ID of the option currently reached with keyboard navigation. */
  get activeDescendant(): string | null {
    return this.panelOpen && !isNullOrUndefined(this.activeItemIndex)
      ? this.getOptionId(this.activeItemIndex)
      : null;
  }

  /** Returns a DOM-safe, select-specific ID for an option index. */
  getOptionId(index: string | number): string {
    return `${this.id}-option-${index}`;
  }

  /** Returns the virtual option index encoded in an option DOM ID. */
  getOptionIndex(optionId: string | undefined): string | undefined {
    return optionId?.replace(`${this.id}-option-`, '');
  }

  /** Returns the theme to be used on the panel. */
  _getPanelTheme(): string {
    return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
  }

  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }

  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */
  _onBlur() {
    this._focused = false;

    if (!this.disabled && !this.panelOpen) {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
  }

  /**
   * to handle some keyboard event when the caret is on the input
   * @param event
   */
  _handleKeydown(event: KeyboardEvent) {
    if (
      !this.panelOpen &&
      ['Enter', 'Space', 'ArrowDown', 'ArrowUp'].includes(event.code)
    ) {
      event.preventDefault();
      this.activeItemIndex ??= '0';
      this.panel.open();
      return;
    }

    if (this.panelOpen && event.code === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      this.panel.close();
      setTimeout(() => this._elementRef.nativeElement.focus());
      return;
    }

    if (event.code === 'Enter') {
      event.preventDefault();
      if (this.visibleOptions && !isNullOrUndefined(this.activeItemIndex)) {
        const activatedOption = this.visibleOptions.find((o) => o.active);

        if (activatedOption && !activatedOption.disabled) {
          activatedOption?._getHostElement().click();
        }
      }

      return;
    }

    if (
      this.visibleOptions &&
      ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageUp', 'PageDown'].includes(
        event.code
      )
    ) {
      event.preventDefault();
      let nextIndex = -1;
      let changeActiveOption = true;
      const optionsLength = this.visibleOptions.length;

      this.visibleOptions.find((o, index) => {
        if (o.active) {
          nextIndex = index;
          return true;
        }

        return false;
      });

      switch (event.code) {
        case 'ArrowDown':
          {
            if (nextIndex < optionsLength - 1) {
              nextIndex++;
            } else {
              changeActiveOption = false;
            }
          }
          break;

        case 'ArrowUp':
          {
            if (nextIndex > 0) {
              nextIndex--;
            } else {
              changeActiveOption = false;
            }
          }
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = optionsLength - 1;
          break;
        case 'PageUp':
          nextIndex = Math.max(0, nextIndex - 10);
          break;
        case 'PageDown':
          nextIndex = Math.min(optionsLength - 1, nextIndex + 10);
          break;
      }

      if (changeActiveOption) {
        const direction =
          event.code === 'ArrowUp' || event.code === 'Home' || event.code === 'PageUp'
            ? -1
            : 1;
        let nextOption = this.visibleOptions.get(nextIndex);

        while (nextOption?.disabled && nextIndex >= 0 && nextIndex < optionsLength) {
          nextIndex += direction;
          nextOption = this.visibleOptions.get(nextIndex);
        }

        if (nextOption) {
          nextOption._getHostElement().scrollIntoView({ block: 'nearest' });
          this.activeItemIndex = this.getOptionIndex(nextOption.id);
          this._changeDetectorRef.markForCheck();
        }
      }
    }
  }

  /**
   * to get the appropriate value according to the being multiple or single selection
   * @param object
   */
  _toFlat(object: unknown[] | undefined | null): unknown | unknown[] {
    if (!isNullOrUndefined(object)) {
      if (this.multiple) {
        return this._toArray(object);
      } else {
        return object[0];
      }
    }

    return object;
  }

  /**
   * to get an array from an object or an array
   * @param object
   */
  _toArray(object: unknown[] | unknown) {
    return Array.isArray(object) ? object : [object];
  }

  /**
   * to get a function which compares the options with values to detect the selected item
   */
  _getCompareWithFn(): (o1: any, o2: any) => boolean {
    return (o1: any, o2: any) => {
      if (this.compareWith && typeof this.compareWith === 'function') {
        return this.compareWith(o1, o2);
      }

      const value1 = this.getObjectValue(o1, this.dataKey || this.optionValue);
      const value2 = this.getObjectValue(o2, this.dataKey || this.optionValue);

      return value1 === value2;
    };
  }

  /**
   * according to using multiple or single selection, whenever we want to update the form-control value from here we need to get the
   * appropriate value for the form.
   * @private
   */
  private getFlatValueFromSelection(): unknown | unknown[] {
    const selection = this.selectionModel?.selected.map((s: any) =>
      this.getOptionValue(s)
    );

    return this._toFlat(selection);
  }

  /**
   * to get the value of the key property of an object safely
   * @param object -the object that we want to get the value of the key property
   * @param key - the one of the property of the object
   * @private
   */
  private getObjectValue(object: any, key?: string) {
    if (object !== null && key && typeof object === 'object') {
      return object[key];
    }

    return object;
  }
}
