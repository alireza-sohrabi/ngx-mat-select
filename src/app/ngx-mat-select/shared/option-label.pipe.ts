import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toOptionLabel',
})
/**
 * to get the value of the specific property (optionLabel) from the option
 */
export class ToOptionLabelPipe implements PipeTransform {
  /**
   * to get the value of the specific property (optionLabel) from the option
   * @param option
   * @param optionLabel
   */
  transform(option: any | any[], optionLabel?: string): string {
    return this.getOptionLabel(option, optionLabel);
  }

  private getOptionLabel(option: any | any[], optionLabel?: string): string {
    if (Array.isArray(option)) {
      return option.map(s => this.getOptionLabel(s, optionLabel)).join(', ');
    } else {
      return option !== null && optionLabel && typeof option === 'object' ? option[optionLabel] : option;
    }
  }
}
