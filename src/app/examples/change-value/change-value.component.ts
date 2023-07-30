import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import {NgxMatSelectConfigExample} from '../expamles-select';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeValueComponent {
  @Input() config!: NgxMatSelectConfigExample;
  @ViewChild(NgForm) ngForm?: NgForm;

  value = [undefined,null, 20, 10000];
  valueSingle = [20];

  options = [undefined,null, ...Array.from(new Array(2000)).map((_, index) => index)];

}
