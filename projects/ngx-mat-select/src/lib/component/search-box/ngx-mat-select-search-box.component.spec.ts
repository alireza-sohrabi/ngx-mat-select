import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxMatSelectSearchBoxComponent } from './ngx-mat-select-search-box.component';
import { NgxMatSelectSearchBoxModule } from './ngx-mat-select-search-box.module';

describe('NgxMatSelectSearchBoxComponent', () => {
  let component: NgxMatSelectSearchBoxComponent;
  let fixture: ComponentFixture<NgxMatSelectSearchBoxComponent>;
  let input: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxMatSelectSearchBoxModule],
    });

    fixture = TestBed.createComponent(NgxMatSelectSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    input = fixture.nativeElement.querySelector('input');
  });

  it('emits the entered search term after the configured debounce', fakeAsync(() => {
    const terms: string[] = [];
    component.search.subscribe((term) => terms.push(term));

    input.value = 'pizza';
    input.dispatchEvent(new Event('input'));
    tick(component.debounceTime - 1);
    expect(terms).toEqual([]);

    tick(1);
    expect(terms).toEqual(['pizza']);
  }));

  it('clears the value and emits an empty search term', () => {
    const terms: string[] = [];
    component.search.subscribe((term) => terms.push(term));
    component.value = 'pizza';
    component.clear();

    expect(component.value).toBe('');
    expect(terms).toEqual(['']);
  });

  it('tracks focus and forwards keyboard events', () => {
    const keys: KeyboardEvent[] = [];
    component.handleKeydown.subscribe((event) => keys.push(event));

    input.dispatchEvent(new Event('blur'));
    expect(component.focused).toBeFalse();

    input.dispatchEvent(new Event('focus'));
    const keydown = new KeyboardEvent('keydown', { code: 'ArrowDown' });
    input.dispatchEvent(keydown);

    expect(component.focused).toBeTrue();
    expect(keys).toEqual([keydown]);
  });
});
