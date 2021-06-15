import {
  AfterViewInit,
  Directive, ElementRef,
  EventEmitter, HostListener, Injector,
  Input, OnChanges,
  OnDestroy, OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {MatSelect} from "@angular/material/select";
import {fromEvent, Observable, Subscription} from "rxjs";
import {debounceTime, map} from "rxjs/operators";
import {NgxMatSelectMediaTracker} from "./ngx-mat-select-media-tracker";
import {ActivatedRoute, Router} from "@angular/router";
import {MatOption} from "@angular/material/core";
import {FormControlName, NgModel} from "@angular/forms";
import {isPlatformBrowser} from "@angular/common";

@Directive({
  selector: 'mat-select[ngxMatSelect]',
  exportAs: 'ngxMatSelect',

})
export class NgxMatSelectDirective extends NgxMatSelectMediaTracker implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  constructor(
    private injector: Injector,
  ) {
    super(injector);

    this.matSelect = injector.get(MatSelect);
    this._openPanelSub = this.matSelect._openedStream.subscribe(this._afterOpen.bind(this));
    this._currentEl = injector.get(ElementRef).nativeElement as HTMLElement;
    this.router = injector.get(Router, null);
    this.route = injector.get(ActivatedRoute, null);
    // this._panelMaxHeight = SELECT_PANEL_MAX_HEIGHT;
    setTimeout(() => {
      this._handleValueChanges();
    });

  }

  private _lastSourceLen = 0;
  private _panelMaxHeight: number;
  private _currentEl: HTMLElement;
  private _clickableEl: HTMLElement;
  private _afterClickFunc: any;
  matSelectEl: HTMLElement;
  clickMatSelectFunc: any;
  @Input() lazyLoad = false;
  @Input() source: any[] = [];
  @Output() filteredSourceChange = new EventEmitter<any[]>();
  @Input() filteredSource: any[] = [];
  @Input() searcher: (search: string, pageNumber: number, pageSize: number) => Observable<any[]>;
  @Input() isStringArray = false;
  @Input() fragment = 'search';
  @Input() hasSearchBox = true;
  @Input() title: string;
  //configs
  @Input() emptyLabel: string;
  @Input() searchBoxPlaceholder: string;
  @Input() maximumResultForShow;
  @Input() useMobileView;
  @Input() mobileViewType: 'FullScreen' | 'BottomSheet';
  @Input() valueMember: string;
  @Input() displayMember: string;
  @Input() value: any;
  @Input() noMoreResultLabel: string;
  @Input() useInfiniteScroll: boolean;
  @Input() inFirstLoadCallSearcher: boolean;
  @Input() inFirstLoadSearcherValue: string;
  private _isFirstLoading = false;
  private _pageNumber: number = 1;
  private _hasMoreRow = true;
  searchValue: string = '';
  private _htmlScrollTop = 0;
  private _htmlScrollLeft = 0;
  private _bodyScrollTop = 0;
  private _bodyScrollLeft = 0;
  private _openPanelSub: Subscription;
  private _closePanelSub: Subscription;
  private _inputSubscription: Subscription;
  private _selectionChangeSub: Subscription;
  private _listBoxEl: HTMLElement;
  private _valueChangeSub: Subscription;
  private _fromSearch: boolean;
  private _searchBoxInputEl: HTMLInputElement;
  private _mainLoadingElement: HTMLElement;
  loadingContainer = `<div class="ngx-mat-select-loading-container"><div class="loadingio-spinner-ellipsis-ao6bq46b8nt"><div class="ldio-it58uqzfg5">
  <div></div><div></div><div></div><div></div><div></div>
</div></div></div>`;
  loadingScrollContainer = `<div class="loadingio-spinner-rolling-2vwh2v284qu"><div class="ldio-o6nze7by54l">
                                                                                <div></div>
                                                                                       </div></div>`;
  private readonly matSelect: MatSelect;
  private router: Router;
  private readonly route: ActivatedRoute;
  scrollInfFunc: any;

  setloading(check: boolean): void {
    if (this._listBoxEl) {
      const icon = this._listBoxEl.querySelector('.ngx-mat-select-search-box-icon') as HTMLElement;
      const loading = this._listBoxEl.querySelector('.ngx-mat-select-loading-container') as HTMLElement;
      if (check) {
        icon.style.display = 'none';
        loading.style.display = 'flex';
      } else {
        icon.style.display = 'block';
        loading.style.display = 'none';
      }
      if (this._mainLoadingElement) {
        const el = this._getListMainContainerElement();
        if (check) {
          el.scrollTo({
            top: 0,
          })
          this._mainLoadingElement.style.display = 'block';
          el.style.overflow = 'hidden';
        } else {
          setTimeout(() => {
            el.style.overflow = 'auto';
            this._mainLoadingElement.style.display = 'none';
          }, 100)
        }
      }
    }

  }

  ngOnInit(): void {
    super.ngOnInit();
    this._populateConfigs();
    this._closePanelSub = this.matSelect._closedStream.subscribe(this._afterClose.bind(this));
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this._bindAfterClick();
    }, 50)
    if (this.useMobileView) {
      this._changeMedia();
    }
    this.matSelect.compareWith = (o1, o2): boolean => {
      if (o1 && o2) {
        if (typeof (o1) === 'object') {
          return o1[this.valueMember] === o2[this.valueMember];
        } else {
          return o1 === o2;
        }
      }
    };
    if (this.inFirstLoadCallSearcher && this.searcher && typeof (this.searcher) === 'function') {
      this._isFirstLoading = true;
      this.searchValue = this.inFirstLoadSearcherValue;
      try {
        this._onSearch().then((res) => {
          this.source = res;
          this._isFirstLoading = false;
          this.searchValue = '';
        }).catch(() => {
          this._isFirstLoading = false;
          this.searchValue = '';
        });
      } catch {
        this._isFirstLoading = false;
        this.searchValue = '';
      }
    }
  }

  private _checkIsFirstLoading(): void {
    setTimeout(() => {
      if (this._isFirstLoading) {
        this._checkIsFirstLoading();
      } else {
        setTimeout(() => {
          this.setloading(false);
          this._changeSearchBoxEnableStatus(true);
        }, 250);
      }
    }, 150)
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    if (this._openPanelSub)
      this._openPanelSub.unsubscribe();
    if (this._closePanelSub) {
      this._closePanelSub.unsubscribe();
    }
    if (this._selectionChangeSub) {
      this._selectionChangeSub.unsubscribe();
    }
    if (this._inputSubscription) {
      this._inputSubscription.unsubscribe();
    }
    if (this._valueChangeSub) {
      this._valueChangeSub.unsubscribe();
    }
    if (this._valueChangeSub) {
      this._valueChangeSub.unsubscribe();
    }
    if (this.matSelectEl) {
      this.matSelectEl.removeEventListener('click', this.clickMatSelectFunc);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.source && changes.source.currentValue) {
      setTimeout(() => {
        if (changes.source.firstChange) {
          this._populateConfigs();
        }
        this._init();
      });
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.matSelect?.close();
  }

  // @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.matSelect.panelOpen && this.filteredSource.length == 0) {
      this._addNullKeyToOption();

      setTimeout(() => {
        this.matSelect.open();
        this._cleanNullKeyToOption();
      });
    }
  }

  onChangeMediaTracker = () => {
    this._changeMedia();
  };

  private _populateConfigs(): void {
    if (this.emptyLabel === undefined) {
      this.emptyLabel = this.configs.emptyLabel;
    }
    if (this.searchBoxPlaceholder === undefined) {
      this.searchBoxPlaceholder = this.configs.searchBoxPlaceholder;
    }
    if (this.maximumResultForShow === undefined) {
      this.maximumResultForShow = this.configs.maximumResultForShow;
    }
    if (this.useMobileView === undefined || this.useMobileView == null) {
      this.useMobileView = this.configs.useMobileView;
    }
    if (!this.mobileViewType) {
      this.mobileViewType = this.configs.mobileViewType;
    }
    if (!this.valueMember) {
      this.valueMember = this.configs.valueMember;
    }
    if (!this.displayMember) {
      this.displayMember = this.configs.displayMember;
    }
    if (!this.noMoreResultLabel) {
      this.noMoreResultLabel = this.configs.noMoreResultLabel;
      if (!this.noMoreResultLabel) {
        this.noMoreResultLabel = 'No more results found';
      }
    }
    if (this.useInfiniteScroll === undefined || this.useInfiniteScroll === null) {
      this.useInfiniteScroll = this.configs.useInfiniteScroll;
    }
    if (this.inFirstLoadCallSearcher === undefined || this.inFirstLoadCallSearcher === null) {
      this.inFirstLoadCallSearcher = this.configs.inFirstLoadCallSearcher;
    }
    if (this.inFirstLoadSearcherValue === undefined || this.inFirstLoadSearcherValue == null) {
      this.inFirstLoadSearcherValue = this.configs.inFirstLoadSearcherValue ?? '';
    }
    this._clickableEl?.removeEventListener('click', this._afterClickFunc);
  }

  private _bindAfterClick(): void {
    this._afterClickFunc = this.onClick.bind(this);
    const parentEl = this._currentEl.parentElement.parentElement.parentElement.parentElement;
    if (parentEl.tagName == 'MAT-FORM-FIELD') { //.contains('mat-form-field-infix')
      this._clickableEl = parentEl;
      parentEl.addEventListener('click', this._afterClickFunc);
    } else {
      this._currentEl.addEventListener('click', this._afterClickFunc);
      this._clickableEl = this._currentEl;
    }
  }

  private _handleValueChanges(): void {
    const ngModelChanges = this.injector.get(NgModel, null);
    // this._valueChangeDetected();
    if (ngModelChanges) {
      this._valueChangeSub = ngModelChanges.valueChanges.subscribe(val => {
        if (val)
          this._valueChangeDetected();
      })
    } else {
      const formControlValueChange = this.injector.get(FormControlName, null);
      if (formControlValueChange) {
        this._valueChangeSub = formControlValueChange.valueChanges.subscribe(val => {
          if (val)
            this._valueChangeDetected();
        })
      } else {
        this._valueChangeSub = this.matSelect.valueChange.subscribe(val => {
          if (val)
            this._valueChangeDetected();
        });
      }
    }
  }

  private _valueChangeDetected(): void {
    if (!this.matSelect.panelOpen) {
      this._fromSearch = false;
      if (this.searchValue) {
        this.searchValue = '';
      }
      this._syncValueAndOptions();
      setTimeout(() => {
        this._syncSourceAndOptions(this.filteredSource)
      });
    }
  }

  private _scrollProcess = false;
  private _scrollInfLoadingEl: HTMLElement;
  private _noMoreResultEl: HTMLElement;

  private _addLoadingElementForScrollInf(): void {
    const container = document.createElement('div');
    container.classList.add('ngx-mat-select-scroll-loading');
    container.innerHTML = this.loadingScrollContainer;
    this._scrollInfLoadingEl = container;
    this._listBoxEl.parentElement.appendChild(container);
  }

  changeScrollLoadingState(show: boolean): void {
    if (this._scrollInfLoadingEl) {
      if (show) {
        this._changeSearchBoxEnableStatus(false);
        this._scrollInfLoadingEl.style.display = 'block';
      } else {
        this._scrollInfLoadingEl.style.display = 'none';
        this._changeSearchBoxEnableStatus(true);
      }
    }
  }

  private _addMainLoading(): void {
    const el = document.createElement('div');
    el.classList.add('ngx-mat-select-main-loading');
    el.innerHTML = this.loadingScrollContainer;
    this._mainLoadingElement = el;
    this._listBoxEl.appendChild(el);
  }

  scrollInfChange(event: Event): void {
    const el = event.target as HTMLElement;
    if (el) {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const height = el.clientHeight;
      // const lastOptionHeight = this.matSelect?.options?.last._getHostElement()?.clientHeight ?? 0;
      if ((scrollTop + height) >= scrollHeight && !this._scrollProcess && this._hasMoreRow) {
        this._scrollProcess = true;
        const checkSourceLen = this.source.length || this._lastSourceLen;
        if (checkSourceLen < this.maximumResultForShow) {
          this._hasMoreRow = false;
          this._scrollProcess = false;
        } else {
          this.changeScrollLoadingState(true);
          setTimeout(() => {
            this._listBoxEl.scrollTo({
              top: this._listBoxEl.scrollHeight
            });
            setTimeout(() => {
              this._pageNumber += 1;
              this._onSearch(true).then((items) => {
                this._lastSourceLen = items.length;
                const len = items.length;
                this._hasMoreRow = len >= this.maximumResultForShow;
                this.changeScrollLoadingState(false);
                items.forEach(z => {
                  z['ngxPage'] = this._pageNumber
                  z.ngxHide = false
                });
                let pagedSrc = [...this.filteredSource.filter(w => !w['ngxPage'] || (w['ngxPage'] != this._pageNumber)), ...items]

                this._syncSourceAndOptions(pagedSrc.filter(w => !w.ngxHide), this._pageNumber * this.maximumResultForShow, pagedSrc);
                if (!this._hasMoreRow) {
                  this._changeNoMoreResultState(true);
                  this._scrollToNextItem();
                } else {
                  this._scrollToNextItem();
                }

                this._scrollProcess = false;
              });
            }, 350);

          }, 0);
        }

      }
    }
  }

  private _addScrollInf(): void {
    this.scrollInfFunc = this.scrollInfChange.bind(this);
    const el = this._getListMainContainerElement();
    el?.addEventListener('scroll', this.scrollInfFunc, false);
    this._addLoadingElementForScrollInf();
  }

  private _changeNoMoreResultState(show: boolean): void {
    if (this._noMoreResultEl) {
      if (!show) {
        this._noMoreResultEl.style.display = 'none';
      } else {
        this._noMoreResultEl.style.display = 'block';
      }
    }
  }

  private _scrollToNextItem(): void {
    const el = this._getListMainContainerElement();
    const optionHeight = this.matSelect?.options?.first._getHostElement().clientHeight ?? 34;
    this._scrollInList(el.scrollTop + optionHeight);
  }

  private _scrollToEndOfList(): void {
    const el = this._getListMainContainerElement();
    this._scrollInList(el.scrollHeight);
  }

  private _scrollInList(top: number): void {
    const el = this._getListMainContainerElement();
    if (el) {
      setTimeout(() => {
        el.scrollTo({
          top: top,
          behavior: "smooth"
        });
      });
    }
  }

  private _getListMainContainerElement(): HTMLElement {
    let el: HTMLElement;
    if (this.mobileQuery.matches) {
      el = this._listBoxEl.parentElement;
    } else {
      el = this._listBoxEl;
    }
    return el;
  }

  private _addNoMoreResultElement(): void {
    if (this._listBoxEl) {
      const container = document.createElement('div');
      container.classList.add('ngx-mat-select-scroll-no-more');
      container.innerText = this.noMoreResultLabel;
      this._noMoreResultEl = container;
      this._listBoxEl.appendChild(container);
    }
  }

  private _removeScrollInfEvent(): void {
    const el = this._getListMainContainerElement();
    if (el) {
      el.removeEventListener('scroll', this.scrollInfFunc);
    }
  }

  private _changeSearchBoxEnableStatus(enable: boolean): void {
    if (this._searchBoxInputEl) {
      if (enable) {
        this._searchBoxInputEl.removeAttribute('disabled');

      } else {

        this._searchBoxInputEl.setAttribute('disabled', 'disabled');
      }

    }
  }

  private _cleanNullKeyToOption(): void {
    const index = this.filteredSource.findIndex(z => z.keyNull == 'null');
    if (index >= 0) {
      this.filteredSource.splice(index, 1);
      if (this.filteredSource.length == 0) {
        this._syncSourceAndOptions(this.filteredSource);
      } else {
        this.filteredSourceChange.emit(this.filteredSource);
      }
    }
  }

  private _addNullKeyToOption(): void {
    if (this.matSelect.options.length == 0) {
      this.filteredSource.push({keyNull: 'null'});
      this.filteredSourceChange.emit(this.filteredSource);
    }
  }

  private _moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      let range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  private _handleBackDropAfterClose(): void {
    const backdropEl = document.querySelector('.cdk-overlay-container.bottomToTop .cdk-overlay-backdrop') as HTMLElement;
    if (backdropEl) {
      backdropEl.style.display = 'none';
      backdropEl.parentElement.classList.remove('bottomToTop');
    }
  }

  private _handleOverflowAfterClose(): void {
    if (this.useMobileView) {
      if (this.mobileQuery.matches) {
        document.documentElement.style.overflow = '';
        // document.body.style.overflow = '';
        setTimeout(() => {
          document.documentElement.scrollTo(this._htmlScrollLeft, this._htmlScrollTop);
          // setTimeout(() => {
          //   document.body.scrollTo(this._bodyScrollLeft, this._bodyScrollTop);
          // });
        }, 0);
        if (this.fragment) {
          this.router?.navigate([], {relativeTo: this.route, fragment: null});
        }
      }
    }
  }

  private _handleSelectionAfterClose(): void {
    this._addNullKeyToOption();
  }

  private _addSearchablePanelClass(parent: HTMLElement): void {
    if (this._listBoxEl) {
      if (!parent.classList.contains('ngx-mat-select-panel')) {
        parent.classList.add('ngx-mat-select-panel');
      }
    }
  }

  private timeOut;

  private _createHeaderElement(): HTMLElement {
    this.timeOut = null;
    const searchElement = document.createElement('div');
    searchElement.innerHTML = `
    <input type='text'

     placeholder="${this.searchBoxPlaceholder}"
     class="ngx-mat-select-search-box-input" value="${this.searchValue}" >
    <i class="ngx-mat-select-search-box-icon"></i>
    ${this.loadingContainer}
    `;
    searchElement.addEventListener('keydown', ev => {
      if (ev.keyCode === 32 && this.deviceType() === 'desktop') {
        ev.stopImmediatePropagation();
        if (this.timeOut)
          clearTimeout(this.timeOut);
        this.setloading(true);
        this.timeOut = setTimeout(() => {
          if (ev.target['value']) {
            const value: string = ev.target['value'].toString();
            // if (value.split('').length <= 1) {
            setTimeout(() => {
              this.searchValue = value;
              this._onSearch();
            }, 350)
            // } else {
            //   this.setloading(false);
            // }
          } else {
            this.setloading(false);

          }
        }, this.debounceTime())

      }
    })
    const inputContainerEl = document.createElement('div');
    inputContainerEl.classList.add('ngx-mat-select-search-box-wrap');
    inputContainerEl.appendChild(searchElement);
    searchElement.classList.add('ngx-mat-select-search-box-container');
    searchElement.classList.add('abs');
    if (!this.hasSearchBox) {
      if (this.mobileQuery.matches && this.useMobileView) {
        searchElement.style.display = 'none';

      } else {
        inputContainerEl.style.display = 'none';
      }
    }
    return inputContainerEl;
  }

  private _afterOpen(): void {
    if (!this.mobileQuery.matches || !this.useMobileView) {
      this._removeOpacity();
    }
    this._listBoxEl = this.matSelect.panel.nativeElement as HTMLElement;
    setTimeout(() => {
      if (this.useInfiniteScroll) {
        this._addScrollInf();
        this._addNoMoreResultElement();
      }
      this._addMainLoading();
      if (this._isFirstLoading) {
        this.setloading(true);
        this._changeSearchBoxEnableStatus(false);
        this._checkIsFirstLoading();
      }
    }, 10);
    if (this._listBoxEl) {
      if (this.hasSearchBox && !this.mobileQuery.matches && this.useMobileView) {
        this._listBoxEl.style.height = this._panelMaxHeight + 'px';
      }
      const inputContainerEl = this._createHeaderElement();
      this._listBoxEl.prepend(inputContainerEl);
      this._appendNotFoundHtmlTag();
      this._cleanNullKeyToOption();
      this._handleNotFoundLabel(this.filteredSource);
      if (this.useMobileView) {
        this._afterOpenForMobile(inputContainerEl);
      }
      setTimeout(() => {
        if (this.hasSearchBox) {
          const inputEl = inputContainerEl.querySelector('input');
          this._searchBoxInputEl = inputEl;
          if (!this.mobileQuery.matches) {
            inputEl.focus();
            this._moveCursorToEnd(inputEl);
          }
          this._handleObserverForInputValue(inputEl);
        }
      });
    }
  }

  private _afterClose(): void {
    this._handleBackDropAfterClose();
    this._handleOverflowAfterClose();
    this._handleSelectionAfterClose();
    this._changeMedia();
    //this._changePaging();
    if (this.useInfiniteScroll) {
      this._removeScrollInfEvent();
      this._hasMoreRow = true;
    }
  }

  private _changePaging(): void {
    if (this._pageNumber > 1) {
      this._pageNumber = 1;
      this._syncSourceAndOptions(this.filteredSource.filter(w => !w.ngxHide), this.maximumResultForShow, this.filteredSource);
    }
  }

  private _handleObserverForInputValue(inputEl: HTMLInputElement): void {
    const terms$ = fromEvent<any>(inputEl, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => {
          if (this.lettersOnly(event)) {
            this.setloading(true)
            return event.target['value'];
          } else
            return null
        }),
        debounceTime(this.debounceTime()),
        // distinctUntilChanged()
      );
    if (terms$) {
      this._inputSubscription = terms$?.subscribe(
        (content: string) => {
          if (content !== undefined && content !== null) {
            this.searchValue = content;
            this._onSearch();
          }
        }
      )
      ;
    }

  }

  private debounceTime(): number {
    return this.lazyLoad ? 400 : 250;
  }

  private lettersOnly(event) {
    if (this.deviceType() !== 'desktop') {
      return true;
    }
    if (event && event.keyCode !== null && event.keyCode !== undefined) {
      const letterNumber = /^[0-9a-zA-Z]+$/;
      let charCode = event.keyCode;
      if (event.target.value?.match(letterNumber) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
        return true;
      else return null
    }
    return true;
  }

  deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
    return "desktop";
  };

  private _init(): void {
    if (this.hasSearchBox) {
      this._syncValueAndOptions();
      setTimeout(() => {
        this._syncSourceAndOptions(this.filteredSource);
      }, 50)
    } else {
      this.filteredSource = this.source;
    }
  }

  private _syncValueAndOptions(mainSrc: any[] = null, maxCount = this.maximumResultForShow): void {
    let src = this._setMaxCount(mainSrc || this.source, maxCount);
    this.value = this.matSelect.value;
    if (this.value) {
      const val = this.value;
      if (Array.isArray(val)) {
        if (val.length > 0) {
          if (src.length > 0) {
            val.forEach(v => {
              const item = src.find(w => this._getExp(w, v));
              if (!item) {
                if (v && typeof (v) === 'object') {
                  src.unshift(v);
                  v['ngxHide'] = true;
                } else {
                  const nItem = this.source.find(w => this._getExp(w, v));
                  if (nItem) {
                    src.unshift(nItem);
                    nItem['ngxHide'] = true;
                  }
                }
              } else {

                item['ngxHide'] = false;

              }
            });
          } else {
            if (this.source.length == 0) {
              this.source = val;
            } else {
              val.forEach(item => item['ngxHide'] = true);
            }
            src = val;
          }
        }
      } else {
        if (src.length > 0) {
          const item = src.find(w => this._getExp(w, val));
          if (!item) {
            if (val && typeof (val) === 'object') {
              val['ngxHide'] = true;
              src.unshift(val);
            } else {
              const nItem = this.source.find(w => this._getExp(w, val));
              if (nItem) {
                nItem['ngxHide'] = true;
                src.unshift(nItem);
              }
            }
          } else {
            item['ngxHide'] = false;
          }
        } else if (val && typeof (val) === 'object') {
          if (this.source.length == 0) {
            this.source = [val];
          } else {
            val['ngxHide'] = true;
          }
          src = [val];

        }
      }
    }
    this.filteredSource = src;
    this.filteredSourceChange.emit(this.filteredSource);
  }

  private _syncSourceAndOptions(filteredSource: any[], maxCount = this.maximumResultForShow, mainSrc = this.source): void {
    filteredSource = this._setMaxCount(filteredSource, maxCount);
    filteredSource.forEach(item => item['ngxSelected'] = 0);
    this.matSelect.options.forEach(op =>
      op['_element'].nativeElement.style.display = '');
    let selectedOptionO = this.matSelect.selected;
    let selectedOptions: MatOption[] = [];
    if (selectedOptionO) {
      if (!Array.isArray(selectedOptionO)) {
        selectedOptions = [selectedOptionO as any];
      } else {
        selectedOptions = selectedOptionO as MatOption[];
      }
      let unshiftedlist = [];
      (selectedOptions).forEach(option => {
        let item = filteredSource.find(z => this._getExpForOption(z, option.value));
        if (!item) {
          if (option.value && typeof (option.value) === 'object') {
            item = option.value;
          } else {
            item = mainSrc.find(z => this._getExpForOption(z, option.value));
          }
          if (item) {
            item['ngxSelected'] = 1;
            item['ngxHide'] = true;
            unshiftedlist.push(item);
          }
        } else if (item['ngxHide']) {
          if (this._fromSearch) {
            item['ngxHide'] = false;
          } else {
            item['ngxHide'] = true;
          }
        }

      });
      filteredSource.unshift(...unshiftedlist);
    }
    const showNotFoundLabel = this._handleNotFoundLabel(filteredSource);
    if (showNotFoundLabel) {
      this._toggleParentClass(this.matSelect.panel, 'remove-options', '.cdk-overlay-pane');
    } else {
      this._toggleParentClass(this.matSelect.panel, 'hide-options', '.cdk-overlay-pane');
    }
    this.filteredSource = filteredSource;
    this.filteredSourceChange.emit(this.filteredSource);
    setTimeout(() => {
      this._hideOptions();
      setTimeout(() => {
        this._removeParentClass(this.matSelect.panel, 'hide-options', '.cdk-overlay-pane');
        this._removeParentClass(this.matSelect.panel, 'remove-options', '.cdk-overlay-pane');
      }, 0)
    });
  }

  private _hideOptions(): void {
    this.filteredSource.filter(z => !!z['ngxHide']).forEach(hide => {
      let ops;
      if (!this.matSelect.multiple) {
        ops = [this.matSelect.selected]
      } else {
        ops = this.matSelect.selected;
      }
      const option = ops.find(z => this._getExpForOption(hide, z.value));
      if (option) {
        const opEl = option['_element'].nativeElement as HTMLInputElement;
        opEl.style.display = 'none';
      }
    });
  }

  private _getPagedResult(src: any[]): any[] {
    let result = [];
    const startIndex = this.maximumResultForShow * (this._pageNumber - 1);
    let endIndex = this.maximumResultForShow * (this._pageNumber);
    if (endIndex > src.length) {
      endIndex = src.length;
    }
    const len = src.length;
    if (startIndex <= len) {
      result = src.slice(startIndex, endIndex);
    }
    return result;
  }

  public refreshData(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (!this.matSelect.panelOpen) {
        this._isFirstLoading = true;
      } else {
        this.setloading(true);
        this._changeSearchBoxEnableStatus(false);
      }
      try {
        this._onSearch().then(res => {
          this._isFirstLoading = false;
          this._changeSearchBoxEnableStatus(true);
          this.source = res;
          resolve(res);
        }).catch(() => {
          this._isFirstLoading = false;
          this._changeSearchBoxEnableStatus(true);
          reject();
        });
      } catch {
        this._isFirstLoading = false;
        this._changeSearchBoxEnableStatus(true);
        reject();
      }
    });


  }

  private _onSearch(changePage = false): Promise<any[]> {
    this._fromSearch = true;
    if (!changePage) {
      if (this._listBoxEl) {
        this._listBoxEl.scrollTo({
          top: 0
        });
      }
      this._pageNumber = 1;
      this._hasMoreRow = true;
      this._changeNoMoreResultState(false);
    }
    return new Promise<any>((resolve, reject) => {
      try {
        this._addSearchablePanelClass(this._listBoxEl);
        if (!this.lazyLoad) {
          let filteredSource = [];
          if (this.isStringArray) {
            filteredSource = this.source
              .filter(x => x?.toString().includes(this.searchValue));
          } else {
            filteredSource = this.source
              .filter(x => x[this.displayMember]?.toString().includes(this.searchValue));
          }
          if (!changePage) {
            this._syncSourceAndOptions(filteredSource);
            this.setloading(false);
          } else {
            filteredSource = this._getPagedResult(filteredSource);
          }
          resolve(filteredSource);
        } else {
          if (this.searcher && typeof (this.searcher) === 'function') {
            this.searcher(this.searchValue, this._pageNumber, this.maximumResultForShow).toPromise().then(res => {
              if (!changePage) {
                this._syncSourceAndOptions(res);
                this.setloading(false);
              }
              resolve(res);
            }).catch(() => {
              this.setloading(false);
              resolve(0);
            });
          } else {
            this.setloading(false);
            resolve(0);
          }
        }
      } catch {
        resolve(0);
      }

    })

  }

  private _appendNotFoundHtmlTag(): void {
    const el = document.createElement('div');
    el.classList.add('ngx-mat-select-not-found-container');
    el.innerHTML = this.emptyLabel;
    this._listBoxEl.appendChild(el);
  }

  private _handleNotFoundLabel(filteredSource: any[]): boolean {
    const show = filteredSource && filteredSource.length > 0 ? filteredSource.filter(z => !z['ngxHide']).length == 0 : true;
    if (this._listBoxEl) {
      const el = this._listBoxEl.querySelector('.ngx-mat-select-not-found-container') as HTMLElement;
      if (el) {
        if (show) {
          el.style.display = 'flex';
        } else {
          el.style.display = 'none';
        }
      }
    }
    return show;

  }

  private _setMaxCount(filteredSource: any[], maxCount = this.maximumResultForShow): any[] {
    // if (!this.hasSearchBox) {
    //   return filteredSource;
    // }
    if (maxCount) {
      filteredSource = filteredSource.slice(0,
        this._getMaxSize(filteredSource, maxCount));
    }
    return filteredSource;
  }

  private _getExp(left: any, right: any): any {
    if (right[this.valueMember]) {
      return left[this.valueMember] == right[this.valueMember];
    } else {
      return left[this.valueMember] == right;
    }
  }

  private _getExpForOption(left: any, right: any): any {
    if (left[this.valueMember]) {
      if (right[this.valueMember]) {
        return left[this.valueMember] == right[this.valueMember];
      } else {
        return left[this.valueMember] == right;
      }
    } else {
      return left == right;
    }
  }

  private _getMaxSize(arr: any[], maximumCount: number): number {
    if (!arr)
      return 0;
    const length = arr.length;
    return length > maximumCount ? maximumCount : length;

  }

  private _changeMedia(): void {
    let classes = this.matSelect.panelClass?.toString().split(' ');
    if (!classes) {
      classes = [];
    }
    if (!classes.includes('ngx-mat-select-opacity')) {
      classes.push('ngx-mat-select-opacity');
    }
    if (this.mobileQuery.matches && this.useMobileView) {
      const hasMyClass = classes.includes('ngx-mat-select-mobile');
      if (this.matSelect) {
        if (!hasMyClass) {
          classes.push('ngx-mat-select-mobile');
        }
      }
    } else {
      classes = classes.filter(z => z !== 'ngx-mat-select-mobile');
    }
    if (classes)
      this.matSelect.panelClass = classes.join(' ');
  }

  private _addTitleForMobileView(spacer: HTMLElement): void {
    if (spacer && !this.hasSearchBox) {
      const titleEl = document.createElement('div');
      titleEl.classList.add('ngx-mat-select-mobile-title');
      if (this.title)
        titleEl.innerHTML = this.title;
      if (document.documentElement.dir === 'rtl') {
        titleEl.style.right = '48px';
      } else {
        titleEl.style.left = '48px';
      }
      spacer.style.display = 'block';
      spacer.prepend(titleEl);
    }
  }

  private _removeOpacity(): void {
    setTimeout(() => {
      this._listBoxEl.classList.remove('ngx-mat-select-opacity');
    })
  }

  private _afterOpenForMobile(spacer: HTMLElement): void {
    this._htmlScrollTop = document.documentElement.scrollTop;
    this._htmlScrollLeft = document.documentElement.scrollLeft;
    // this._bodyScrollLeft = document.body.scrollLeft;
    // this._bodyScrollTop = document.body.scrollTop;
    const panel = this.matSelect.panel;
    const panelEl = panel.nativeElement as HTMLElement;
    const parentEl = panelEl.parentElement as HTMLElement;
    if (this.mobileQuery.matches) {
      document.documentElement.style.overflow = 'hidden';
      //document.body.style.overflow = 'hidden';
      panelEl.classList.remove('mat-select-panel');
      if (this.hasSearchBox || this.title) {
        const listEl = document.querySelector('.ngx-mat-select-mobile') as HTMLElement;
        if (listEl) {
          listEl.style.paddingTop = '50px';
        }
      }
      this._addTitleForMobileView(spacer);
      setTimeout(() => {
        this._removeOpacity()
      }, 80);
      this._toggleParentClass(panel, 'ngx-mat-select-mobile-wrapper', '.cdk-overlay-pane');
      if (this.mobileViewType === "BottomSheet") {
        this._toggleParentClass(panel, 'bottomToTop', '.cdk-overlay-container');
        this._toggleParentClass(panel, 'ngx-mat-select-mobile-open-bottomToTop', '.cdk-overlay-pane');
      } else {
        this._toggleParentClass(panel, 'ngx-mat-select-mobile-open-fullScreen', '.cdk-overlay-pane');
      }
      parentEl.style.overflowY = 'auto';
      parentEl.style.overflowX = 'hidden';

      const firstSelected = panelEl.querySelector('.mat-selected');
      setTimeout(() => {
        firstSelected?.scrollIntoView({block: 'center', behavior: 'smooth'});
      }, 500);
      if (this.hasSearchBox || this.title || true) {
        const iconAppend = spacer;
        const inputSearch = spacer.querySelector('.mat-select-search-input') as HTMLInputElement;
        if (inputSearch)
          inputSearch.style.padding = '0';
        const btn = document.createElement('i');
        if (document.documentElement.dir === 'rtl') {
          btn.classList.add('arrow-right');

        } else {
          btn.classList.add('arrow-left');
        }
        btn.onclick = (ev: MouseEvent) => {
          ev.stopImmediatePropagation();
          this.matSelect.close();
        }
        iconAppend.style.display = 'flex';
        iconAppend.style.alignItems = 'center';
        iconAppend.style.width = '100%';

        iconAppend?.prepend(btn);

      }
      if (this.fragment) {
        this.router?.navigate([], {relativeTo: this.route, fragment: this.fragment});
      }
      spacer.style.position = 'fixed';
      setTimeout(() => {
        spacer.style.position = '';

      }, 150)

    } else {
      if (!panelEl.classList.contains('mat-select-panel')) {
        (panel.nativeElement as HTMLElement).classList.add('mat-select-panel');
      }

    }
  }

  private _toggleParentClass(el, className: string, targetSelect: string): void {
    if (el?.nativeElement?.parentElement) {
      const parentEl = el.nativeElement.parentElement.closest(targetSelect) as HTMLElement;
      if (parentEl) {
        parentEl.classList.toggle(className, true);
      }
    }
  }

  private _removeParentClass(el, className: string, targetSelect: string): void {
    if (el?.nativeElement?.parentElement) {
      const parentEl = el.nativeElement.parentElement.closest(targetSelect) as HTMLElement;
      if (parentEl) {
        parentEl.classList.remove(className);
      }
    }

  }

}
