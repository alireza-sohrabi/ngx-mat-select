import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import {fromEvent, Subject, tap} from 'rxjs';
import {debounceTime, map, startWith, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ngx-mat-select-search-box',
  templateUrl: './ngx-mat-select-search-box.component.html',
  styleUrls: ['./ngx-mat-select-search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ngx-mat-select-search-box',
    '[class.ngx-mat-select-search-box--focused]': 'focused',
  },
})
/**
 * a search box that clint can search through all the options
 */
export class NgxMatSelectSearchBoxComponent implements AfterViewInit, OnDestroy {
  /**
   * the search box input element
   * @private
   */
  @ViewChild('searchBox') private searchBox!: ElementRef<HTMLInputElement>;

  /**
   * it raises an event whenever the client write down a word on the input element.
   * the delay go with this property and the delay will cause a delay on the raising the event
   */
  @Output() search = new EventEmitter<string>();

  /**
   * emits an event when the client press a keyboard
   */
  @Output() handleKeydown = new EventEmitter<KeyboardEvent>();

  /**
   * to make a debounce-time delay whenever the client write a word down, in millisecond
   */
  @Input() debounceTime = 200;

  /**
   * the placeholder on the input search-box
   */
  @Input() placeholder = '';

  /**
   * the value of the input which is bound to the input with two ways binding
   */
  value = '';

  /**
   * whether search-input is focused
   */
  focused = true;

  /**
   * an observable to manage destroying the other observables
   * @private
   */
  private destroy$ = new Subject<void>();

  ngAfterViewInit(): void {
    this.initializeSearchBox();
  }

  /**
   * to handle focusing in the search-box
   */
  focus() {
    if (!this.focused) {
      this.focused = true;
    }
    this.searchBox.nativeElement.focus();
  }

  /**
   * to handle focusing in the search-box
   */
  blur() {
    if (this.focused) {
      this.focused = false;
    }
    this.searchBox.nativeElement.blur();
  }

  /**
   * to clear the input value
   */
  clear() {
    this.value = '';
    this.search.emit('');
  }

  /**
   * when blurring from the search-box input
   */
  _onBlur() {
    this.focused = false;
  }

  /**
   * when focusing on the search-box input
   */
  _onFocus() {
    this.focused = true;
  }

  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
  }

  /**
   * to listen to the search-box input event whenever a word is written down
   * @private
   */
  private initializeSearchBox() {
    fromEvent(this.searchBox.nativeElement, 'input')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(this.debounceTime),
        startWith(''),
        tap(searchTerm => {
          this.search.emit(searchTerm);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
