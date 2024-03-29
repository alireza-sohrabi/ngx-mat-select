import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgxMatSelectConfigExample} from '../expamles-select';
import {NgxMatSelectMultipleDisplay} from "../../ngx-mat-select";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigComponent implements AfterViewInit {
  @Input() config?: NgxMatSelectConfigExample;
  @Output() configChange = new EventEmitter<NgxMatSelectConfigExample>();
  @Output() clearForms = new EventEmitter();
  multipleViewType: NgxMatSelectMultipleDisplay[] = ['oneRowChip', 'multipleRowChip', 'text'];
  darkMode = true;

  onConfigChange<T extends NgxMatSelectConfigExample, P extends keyof T>(prop: P, value: T[P]) {
    if (this.config) {
      ((this.config as any)[prop]) = value;
      this.configChange.emit({...this.config});
    }
  }

  onThemeModeChange() {
    this.darkMode = !this.darkMode;
    for (const body of this.getBodyEl()) {
      if (this.darkMode) {
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
      } else {
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
      }
    }
  }

  ngAfterViewInit(): void {
    this.onThemeModeChange();
  }

  getBodyEl() {
    return Array.from(document.getElementsByTagName('body'));
  }

  getDimension(value: any) {

    return isNaN(value) ? value : Number(value);
  }

  getValue(eventTarget: EventTarget | Event) {

    return ((eventTarget as any).target as any)?.['value'];
  }

}
