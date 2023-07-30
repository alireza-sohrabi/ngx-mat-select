import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  templateUrl: './options-at-once.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsAtOnceComponent {
  loading$ = new BehaviorSubject<boolean>(true);
  options$: Observable<any[]>;
  reactiveFormGroup = new FormGroup({
    selectValue: new FormControl([
      'option_50', 'option_20', 'option_160'
    ]),
  });

  private options$$ = new BehaviorSubject<string[]>([]);


  constructor() {
    this.options$ = this.options$$.asObservable();

    /**
     * the options will be loaded lazily after 5 seconds.
     */
    setTimeout(() => {
      this.options$$.next([
        ...Array.from(new Array(2000)).map((_, index) =>
          'option_' + index,
        ),
      ]);

      this.loading$.next(false);
    }, 5000)
  }


}
