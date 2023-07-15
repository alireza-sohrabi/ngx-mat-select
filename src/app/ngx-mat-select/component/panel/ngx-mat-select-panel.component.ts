import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {CdkConnectedOverlay, ConnectedPosition, ViewportRuler} from '@angular/cdk/overlay';
import {Directionality} from '@angular/cdk/bidi';

import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import {startWith, takeUntil} from 'rxjs/operators';

import {matSelectAnimations} from '../../shared/animations';
import {NgxMatSelectViewType} from '../../ngx-mat-select';

@Component({
  selector: 'ngx-mat-select-panel',
  templateUrl: './ngx-mat-select-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [matSelectAnimations.transformPanel],
  encapsulation: ViewEncapsulation.None,
})
/**
 * a panel which will be connected to the trigger element
 */
export class NgxMatSelectPanelComponent implements OnDestroy, OnInit, AfterViewInit {
  /**
   * the overlay API that will be appended into the DOM's body
   * @private
   */
  @ViewChild(CdkConnectedOverlay) private overlay!: CdkConnectedOverlay;

  /**
   * it raises an event before the panel gets close
   * */
  @Output() beforeClose = new EventEmitter<void>();

  /**
   * it raises an event after the panel gets close
   * */
  @Output() afterClose = new EventEmitter<void>();

  /**
   * it raises an event after the panel gets open
   * */
  @Output() afterOpen = new EventEmitter<void>();

  /**
   * it raises an event before the panel gets open
   * */
  @Output() beforeOpen = new EventEmitter<void>();

  /**
   * if it's true it shows a back-drop behind the panel
   */
  @Input() hasBackdrop = true;

  /**
   * if it's true the panel does not open
   */
  @Input() disabled = false;

  /**
   * the specific theme selected form the form-field
   */
  @Input() theme?: string;

  /** Class or list of classes to be applied to the menu's overlay panel. */
  @Input() get overlayClass(): string | string[] {
    return this._overlayClass;
  }

  set overlayClass(value: string | string[]) {
    this._overlayClass = Array.isArray(value)
      ? (value.join(' '))
      : value;
  }

   _overlayClass = '';

  /** Classes to be passed to the select panel. Supports the same syntax as `ngClass`. */
  @Input() panelClass: string | string[] | Set<string> | {[key: string]: any} = [];

  /**
   * the origin element that we want to connect it with the panel
   */
  @Input() get connectedOverlayOrigin() {
    return this._connectedOverlayOrigin;
  }

  set connectedOverlayOrigin(value: ElementRef) {
    this._connectedOverlayOrigin = value;
    this.updateOverlayWidth();

    // console.log(this.connectedOverlayOrigin?.nativeElement.tagName, this._panelWidth, this.width)
  }

  _connectedOverlayOrigin!: ElementRef;

  /**
   * the width of the panel
   */
  @Input() get width() {
    return this._width;
  }

  set width(value: string | number | null) {
    this._width = value;
    this.updateOverlayWidth();
  }

  private _width: string | number | null = 'auto';

  /**
   * the height of the panel
   */
  @Input() height = 350;

  /**
   * how to show the panel, it can be 'BottomSheet', 'FullScreen' and 'Default'
   * @param value
   */
  @Input() set viewType(value: NgxMatSelectViewType) {
    let css = '';

    switch (value) {
      case 'BottomSheet':
        css = 'bottom-sheet';
        break;
      case 'FullScreen':
        css = 'full-screen';
        break;
      default:
      case 'Default':
        css = 'default';
        break;
    }

    this.overlayClassViewType = `ngx-mat-select-${css}-view-type`;
  }

  overlayClassViewType = 'ngx-mat-select-default-view-type';

  /**
   * we can open and close the panel just with changing this state
   */
  isOpen$: Observable<boolean>;

  _panelWidth?: string | number;

  _positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      panelClass: 'ngx-mat-select-panel-above',
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      panelClass: 'ngx-mat-select-panel-above',
    },
  ];

  /**
   * an observable to manage destroying the other observables
   * @private
   */
  private destroy$ = new Subject<void>();

  /**
   * a subject to control the opening of the panel with it
   * @private
   */
  private isOpen$$ = new BehaviorSubject(false);

  constructor(
    private dir: Directionality,
    private changeDetectorRef: ChangeDetectorRef,
    private viewportRuler: ViewportRuler
  ) {
    this.isOpen$ = this.isOpen$$.asObservable();
  }

  ngOnInit(): void {
    this.viewportRuler
      .change()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isOpen) {
          this.updateOverlayWidth();
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  get isOpen() {
    return this.isOpen$$.getValue();
  }

  ngAfterViewInit(): void {
    this.syncDirection();
  }

  /**
   * whenever we want to update the position of the panel due to the position changes in the trigger origin element
   * we should call this method
   */
  updatePosition() {
    this.overlay.overlayRef.updatePosition();
  }

  /**
   * to close the panel
   * @param event
   */
  onOutsideClick(event: MouseEvent) {
    if (event.target && this.connectedOverlayOrigin?.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }

    this.close();
  }

  /**
   * to open the panel
   */
  open() {
    this.beforeOpen.emit();

    if (!this.disabled) {
      this.isOpen$$.next(true);
    }
  }

  /**
   * to close the panel
   */
  close() {
    this.beforeClose.emit();
    this.isOpen$$.next(false);
  }

  onOverlayKeyDown(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.close();
    }
  }

  /** sets how wide the overlay panel should be. */
  updateOverlayWidth(): void {
    if (this.width === 'auto') {
      this._panelWidth = this.connectedOverlayOrigin?.nativeElement.getBoundingClientRect().width;
    } else {
      this._panelWidth = this.width === null ? '' : this.width;
    }

    this.changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
    this.isOpen$$.complete();
  }

  /**
   * to sync the direction of the overlay with the body direction
   * @private
   */
  private syncDirection() {
    this.dir.change
      .pipe(
        startWith(this.dir.value),
        tap(dir => {
          this.overlay.overlayRef?.setDirection(dir);
          this.changeDetectorRef.detectChanges();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
