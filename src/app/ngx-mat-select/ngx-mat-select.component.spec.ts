import {ComponentFixture, fakeAsync, flush, TestBed, waitForAsync} from '@angular/core/testing';
import {dispatchFakeEvent} from './test-helper';

import {NgxMatSelectComponent} from './ngx-mat-select.component';
import {EMPTY, Observable} from 'rxjs';
import {Component, Provider, ViewChild} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {Directionality} from '@angular/cdk/bidi';
import {By} from '@angular/platform-browser';
import {NgxMatSelectModule} from './ngx-mat-select.module';

describe('LibSelectComponent', () => {
  let overlayContainerElement: HTMLElement;
  let dir: {value: 'ltr' | 'rtl'; change: Observable<string>};

  /**
   * Configures the test module for MatSelect with the given declarations. This is broken out so
   * that we're only compiling the necessary test components for each test in order to speed up
   * overall test time.
   * @param declarations Components to declare for this block
   * @param providers Additional providers for this block
   */
  function configureMatSelectTestingModule(declarations: any[], providers: Provider[] = []) {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        NgxMatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        OverlayModule,
      ],
      declarations: declarations,
      providers: [{provide: Directionality, useFactory: () => (dir = {value: 'ltr', change: EMPTY})}, ...providers],
    }).compileComponents();

    overlayContainerElement = TestBed.inject(OverlayContainer).getContainerElement();
  }

  describe('core', () => {
    beforeEach(waitForAsync(() => {
      configureMatSelectTestingModule([BasicSelect]);
    }));

    describe('overlay panel', () => {
      let fixture: ComponentFixture<BasicSelect>;
      let formField: HTMLElement;
      let trigger: HTMLElement;

      beforeEach(fakeAsync(() => {
        fixture = TestBed.createComponent(BasicSelect);
        fixture.detectChanges();
        formField = fixture.debugElement.query(By.css('.mat-mdc-form-field'))!.nativeElement;
        trigger = formField.querySelector('trigger') as HTMLElement;
        flush();
      }));

      it('should open the panel when trigger is clicked', fakeAsync(() => {
        trigger.click();
        fixture.detectChanges();
        flush();

        expect(fixture.componentInstance.select.panelOpen).toBe(true);
        expect(overlayContainerElement.textContent).toContain('Steak');
        expect(overlayContainerElement.textContent).toContain('Pizza');
        expect(overlayContainerElement.textContent).toContain('Tacos');
      }));

      it('should close the panel when an item is clicked', fakeAsync(() => {
        trigger.click();
        fixture.detectChanges();
        flush();

        const option = overlayContainerElement.querySelector('mat-option') as HTMLElement;
        option.click();
        fixture.detectChanges();
        flush();

        expect(overlayContainerElement.textContent).toEqual('');
        expect(fixture.componentInstance.select.panelOpen).toBe(false);
      }));

      it('should close the panel when a click occurs outside the panel', fakeAsync(() => {
        trigger.click();
        fixture.detectChanges();
        flush();

        const backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;

        backdrop.click();
        fixture.detectChanges();
        flush();

        expect(overlayContainerElement.textContent).toEqual('');
        expect(fixture.componentInstance.select.panelOpen).toBe(false);
      }));

      it('should be able to set a custom width on the select panel', fakeAsync(() => {
        fixture.componentInstance.panelWidth = '42px';
        fixture.detectChanges();

        trigger.click();
        fixture.detectChanges();
        flush();

        const pane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;
        expect(pane.style.width).toBe('42px');
      }));

      it('should not set a width on the panel if panelWidth is null', fakeAsync(() => {
        fixture.componentInstance.panelWidth = null;
        fixture.detectChanges();

        trigger.click();
        fixture.detectChanges();
        flush();

        const pane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;
        expect(pane.style.width).toBeFalsy();
      }));

      it('should not set a width on the panel if panelWidth is an empty string', fakeAsync(() => {
        fixture.componentInstance.panelWidth = '';
        fixture.detectChanges();

        trigger.click();
        fixture.detectChanges();
        flush();

        const pane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;
        expect(pane.style.width).toBeFalsy();
      }));

      it('should be able to set extra classes on the panel', fakeAsync(() => {
        trigger.click();
        fixture.detectChanges();

        const panel = overlayContainerElement.querySelector('.panel') as HTMLElement;

        expect(panel.classList).toContain('custom-one');
        expect(panel.classList).toContain('custom-two');
        flush();
      }));

      it('should update disableRipple properly on each option', fakeAsync(() => {
        const options = fixture.componentInstance.select.visibleOptions.toArray();

        expect(options.every(option => option.disableRipple === false)).toBeTruthy();

        fixture.componentInstance.disableRipple = true;
        fixture.detectChanges();

        expect(options.every(option => option.disableRipple === true)).toBeTruthy();
      }));

      it('should not show ripples if they were disabled', fakeAsync(() => {
        fixture.componentInstance.disableRipple = true;
        fixture.detectChanges();

        trigger.click();
        fixture.detectChanges();
        flush();

        const option = overlayContainerElement.querySelector('mat-option')!;

        dispatchFakeEvent(option, 'mousedown');
        dispatchFakeEvent(option, 'mouseup');

        expect(option.querySelectorAll('.mat-ripple-element').length).toBe(0);
      }));

      it(
        'should not consider itself as blurred if the trigger loses focus while the ' + 'panel is still open',
        fakeAsync(() => {
          const selectElement = fixture.nativeElement.querySelector('.lib-select');
          const selectInstance = fixture.componentInstance.select;

          dispatchFakeEvent(selectElement, 'focus');
          fixture.detectChanges();

          expect(selectInstance.focused).toBe(true);

          selectInstance.panel.open();
          fixture.detectChanges();
          flush();
          dispatchFakeEvent(selectElement, 'blur');
          fixture.detectChanges();

          expect(selectInstance.focused).toBe(true);
        })
      );
    });

  });

});

@Component({
  selector: 'basic-select',
  styleUrls: [],
  template: `
    <div [style.height.px]="heightAbove"></div>
    <mat-form-field>
      <mat-label *ngIf="hasLabel">Select a food</mat-label>
      <lib-select
        placeholder="Food"
        libClientSide
        [options]="foods"
        [formControl]="control"
        [required]="isRequired"
        optionValue="value"
        optionLabel="viewValue"
        [tabIndex]="tabIndexOverride"
        [disableRipple]="disableRipple"
        [panelClass]="panelClass"
        [panelWidth]="panelWidth">
      </lib-select>
      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>
    </mat-form-field>
    <div [style.height.px]="heightBelow"></div>
  `,
})
class BasicSelect {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos', disabled: true},
    {value: 'sandwich-3', viewValue: 'Sandwich'},
    {value: 'chips-4', viewValue: 'Chips'},
    {value: 'eggs-5', viewValue: 'Eggs'},
    {value: 'pasta-6', viewValue: 'Pasta'},
    {value: 'sushi-7', viewValue: 'Sushi'},
  ];
  control = new FormControl<string | null>(null);
  isRequired!: boolean;
  heightAbove = 0;
  heightBelow = 0;
  hasLabel = true;
  hint!: string;
  tabIndexOverride!: number;
  panelClass = ['custom-one', 'custom-two'];
  disableRipple!: boolean;
  typeaheadDebounceInterval!: number;
  panelWidth: string | null | number = 'auto';

  @ViewChild(NgxMatSelectComponent, {static: true}) select!: NgxMatSelectComponent;
}

