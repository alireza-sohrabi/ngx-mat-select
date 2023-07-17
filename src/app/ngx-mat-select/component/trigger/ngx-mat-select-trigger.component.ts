import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import {NgxMatSelectMultipleDisplay} from '../../select-model';

@Component({
  selector: 'ngx-mat-select-trigger',
  templateUrl: './ngx-mat-select-trigger.component.html',
  host: {
    class: 'ngx-mat-select-trigger',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * a component which shows all selected options inside the form-field
 */
export class NgxMatSelectTriggerComponent {
  /**
   * it raises an event to remove an item from the selected options
   */
  @Output() deselect = new EventEmitter<unknown>();

  /**
   * the custom template which is used as trigger inside the select box, will be provided with selected options
   */
  @Input() customTrigger?: TemplateRef<{$implicit: boolean}> | null;

  /**
   * the selected items
   */
  @Input() selection!: unknown[];

  /**
   * if the trigger is empty or not, the default value is true
   */
  @Input() empty = true;

  /**
   * the placeholder when there is no value
   */
  @Input() placeholder?: string;

  /**
   * to disable the trigger
   */
  @Input() disabled = false;

  /**
   * if it's true it shows the multiple text and chips
   */
  @Input() multiple = false;

  /**
   * Name of the label field of an option
   * */
  @Input() optionLabel?: string;

  /**
   * how to show the selected options inside the form-field when the multiple value it's true
   */
  @Input() multipleDisplay: NgxMatSelectMultipleDisplay = 'multipleRowChip';
}
