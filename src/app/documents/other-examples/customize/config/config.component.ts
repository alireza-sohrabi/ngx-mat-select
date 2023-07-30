import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgxMatSelectConfigExample} from '../customize-model';
import {NgxMatSelectMultipleDisplay, NgxMatSelectViewType} from "../../../../ngx-mat-select";

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
  viewTypes: NgxMatSelectViewType[] = ['Default', 'FullScreen', 'BottomSheet'];

  darkMode = true;

  onConfigChange<T extends NgxMatSelectConfigExample, P extends keyof T>(prop: P, value: T[P], recreate?: boolean) {
    if (this.config) {
      ((this.config as any)[prop]) = value;
      this.configChange.emit({...this.config, recreate});
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
    return Array.from(document.getElementsByTagName('app-customize'));
  }

  getDimension(value: any) {

    return isNaN(value) ? value : Number(value);
  }

  getValue(eventTarget: EventTarget | Event) {

    return ((eventTarget as any).target as any)?.['value'];
  }

}
