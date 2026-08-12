import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { dispatchFakeEvent } from './test-helper';

import { NgxMatSelectComponent } from './select';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import {
  Component,
  Provider,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { By } from '@angular/platform-browser';
import { NgxMatSelectModule } from './select.module';

describe('NgxMatSelectComponent', () => {
  let overlayContainerElement: HTMLElement;
  let dir: {
    value: 'ltr' | 'rtl';
    valueSignal: WritableSignal<'ltr' | 'rtl'>;
    change: Observable<string>;
  };

  /**
   * Configures the test module for MatSelect with the given declarations. This is broken out so
   * that we're only compiling the necessary test components for each test in order to speed up
   * overall test time.
   * @param declarations Components to declare for this block
   * @param providers Additional providers for this block
   */
  function configureMatSelectTestingModule(
    declarations: any[],
    providers: Provider[] = []
  ) {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        NgxMatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
      ],
      declarations: declarations,
      providers: [
        {
          provide: Directionality,
          useFactory: () =>
            (dir = {
              value: 'ltr',
              valueSignal: signal<'ltr' | 'rtl'>('ltr'),
              change: EMPTY,
            }),
        },
        ...providers,
      ],
    }).compileComponents();

    overlayContainerElement =
      TestBed.inject(OverlayContainer).getContainerElement();
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
        formField = fixture.debugElement.query(
          By.css('.mat-mdc-form-field')
        )!.nativeElement;
        trigger = formField.querySelector(
          'ngx-mat-select-trigger'
        ) as HTMLElement;
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

        const option = overlayContainerElement.querySelector(
          'mat-option'
        ) as HTMLElement;
        option.click();
        fixture.detectChanges();
        flush();

        expect(overlayContainerElement.textContent).toEqual('');
        expect(fixture.componentInstance.select.panelOpen).toBe(false);
      }));

      it('should write the selected option value to the form control', fakeAsync(() => {
        trigger.click();
        fixture.detectChanges();
        flush();

        const option = overlayContainerElement.querySelector(
          'mat-option'
        ) as HTMLElement;
        option.click();
        fixture.detectChanges();
        flush();

        expect(fixture.componentInstance.control.value).toBe('steak-0');
        expect(trigger.textContent).toContain('Steak');
      }));

      it('should expose the current combobox accessibility state', () => {
        const select = fixture.nativeElement.querySelector(
          'ngx-mat-select'
        ) as HTMLElement;

        expect(select.getAttribute('role')).toBe('combobox');
        expect(select.getAttribute('aria-expanded')).toBe('false');
        expect(select.getAttribute('aria-labelledby')).toContain(
          'mat-mdc-form-field-label-'
        );
        expect(trigger.textContent).toContain('Food');
      });

      it('should open with the keyboard and connect the combobox to the listbox', fakeAsync(() => {
        const select = fixture.nativeElement.querySelector(
          'ngx-mat-select'
        ) as HTMLElement;

        select.dispatchEvent(
          new KeyboardEvent('keydown', { code: 'Enter', bubbles: true })
        );
        fixture.detectChanges();
        flush();

        const listbox = overlayContainerElement.querySelector(
          '[role="listbox"]'
        ) as HTMLElement;
        expect(fixture.componentInstance.select.panelOpen).toBeTrue();
        expect(select.getAttribute('aria-controls')).toBe(listbox.id);
        expect(select.getAttribute('aria-activedescendant')).toContain(
          `${select.id}-option-`
        );
      }));

      it('should not activate a disabled option when the panel opens', fakeAsync(() => {
        fixture.componentInstance.foods[0].disabled = true;
        fixture.detectChanges();

        trigger.click();
        fixture.detectChanges();
        flush();
        fixture.detectChanges();

        const select = fixture.nativeElement.querySelector(
          'ngx-mat-select'
        ) as HTMLElement;
        expect(select.getAttribute('aria-activedescendant')).toBe(
          `${select.id}-option-1`
        );
      }));

      it('should render an accessible empty state', fakeAsync(() => {
        fixture.componentInstance.foods = [];
        fixture.detectChanges();
        flush();

        trigger.click();
        fixture.detectChanges();
        flush();

        const status = overlayContainerElement.querySelector(
          '.ngx-mat-select-state[role="status"]'
        ) as HTMLElement;
        expect(status.textContent).toContain('No options found');
      }));

      it('should close the panel when a click occurs outside the panel', fakeAsync(() => {
        trigger.click();
        fixture.detectChanges();
        flush();

        const backdrop = overlayContainerElement.querySelector(
          '.cdk-overlay-backdrop'
        ) as HTMLElement;

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

        const pane = overlayContainerElement.querySelector(
          '.cdk-overlay-pane'
        ) as HTMLElement;
        expect(pane.style.width).toBe('42px');
      }));

      it('should not set a width on the panel if panelWidth is null', fakeAsync(() => {
        fixture.componentInstance.panelWidth = null;
        fixture.detectChanges();

        trigger.click();
        fixture.detectChanges();
        flush();

        const pane = overlayContainerElement.querySelector(
          '.cdk-overlay-pane'
        ) as HTMLElement;
        expect(pane.style.width).toBeFalsy();
      }));

      it('should not set a width on the panel if panelWidth is an empty string', fakeAsync(() => {
        fixture.componentInstance.panelWidth = '';
        fixture.detectChanges();

        trigger.click();
        fixture.detectChanges();
        flush();

        const pane = overlayContainerElement.querySelector(
          '.cdk-overlay-pane'
        ) as HTMLElement;
        expect(pane.style.width).toBeFalsy();
      }));

      it('should be able to set extra classes on the panel', fakeAsync(() => {
        trigger.click();
        fixture.detectChanges();
        flush();

        const panel = overlayContainerElement.querySelector(
          '.ngx-mat-select-panel'
        ) as HTMLElement;

        expect(panel.classList).toContain('custom-one');
        expect(panel.classList).toContain('custom-two');
      }));

      it('should update disableRipple properly on each option', fakeAsync(() => {
        const options =
          fixture.componentInstance.select.visibleOptions.toArray();

        expect(
          options.every((option) => option.disableRipple === false)
        ).toBeTruthy();

        fixture.componentInstance.disableRipple = true;
        fixture.detectChanges();

        expect(
          options.every((option) => option.disableRipple === true)
        ).toBeTruthy();
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
        'should not consider itself as blurred if the trigger loses focus while the ' +
          'panel is still open',
        fakeAsync(() => {
          const selectElement =
            fixture.nativeElement.querySelector('ngx-mat-select');
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

  describe('server-side request states', () => {
    beforeEach(waitForAsync(() => {
      configureMatSelectTestingModule([ServerSelect]);
    }));

    it('should show an error and retry the failed page', fakeAsync(() => {
      const fixture = TestBed.createComponent(ServerSelect);
      fixture.detectChanges();
      flush();

      const trigger = fixture.nativeElement.querySelector(
        'ngx-mat-select-trigger'
      ) as HTMLElement;
      trigger.click();
      fixture.detectChanges();
      flush();

      const retry = overlayContainerElement.querySelector(
        '.ngx-mat-select-retry-button'
      ) as HTMLButtonElement;
      expect(overlayContainerElement.querySelector('[role="alert"]')).toBeTruthy();

      retry.click();
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent).toContain('Recovered option');
      expect(fixture.componentInstance.attempts).toBe(2);
    }));
  });
});

@Component({
  selector: 'basic-select',
  styleUrls: [],
  template: `
    <div [style.height.px]="heightAbove"></div>
    <mat-form-field>
      @if (hasLabel) {
        <mat-label>Select a food</mat-label>
      }
      <ngx-mat-select
        placeholder="Food"
        clientSide
        [options]="foods"
        [formControl]="control"
        [required]="isRequired"
        optionValue="value"
        optionLabel="viewValue"
        [tabIndex]="tabIndexOverride"
        [disableRipple]="disableRipple"
        [panelClass]="panelClass"
        [panelWidth]="panelWidth"
        >
      </ngx-mat-select>
      @if (hint) {
        <mat-hint>{{ hint }}</mat-hint>
      }
    </mat-form-field>
    <div [style.height.px]="heightBelow"></div>
    `,
  standalone: false,
})
class BasicSelect {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos', disabled: true },
    { value: 'sandwich-3', viewValue: 'Sandwich' },
    { value: 'chips-4', viewValue: 'Chips' },
    { value: 'eggs-5', viewValue: 'Eggs' },
    { value: 'pasta-6', viewValue: 'Pasta' },
    { value: 'sushi-7', viewValue: 'Sushi' },
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

  @ViewChild(NgxMatSelectComponent, { static: true })
  select!: NgxMatSelectComponent;
}

@Component({
  selector: 'server-select',
  template: `
    <mat-form-field>
      <mat-label>Remote option</mat-label>
      <ngx-mat-select
        serverSide
        [fetchOptions]="fetchOptions"
        [hasSearchBox]="true">
      </ngx-mat-select>
    </mat-form-field>
  `,
  standalone: false,
})
class ServerSelect {
  attempts = 0;

  fetchOptions = () => {
    this.attempts++;
    return this.attempts === 1
      ? throwError(() => new Error('Network unavailable'))
      : of(['Recovered option']);
  };
}
