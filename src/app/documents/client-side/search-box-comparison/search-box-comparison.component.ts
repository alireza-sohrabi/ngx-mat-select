import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './search-box-comparison.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComparisonComponent {
  /**
   * this is the search box comparison function
   * @param searchTerm - the string chars are written down by the client.
   * @param option - the option to compare with searchTerm
   */
  searchComparisonFn = (searchTerm: string, option: string): boolean => {
    return option.toLowerCase().includes(searchTerm.toLowerCase());
  }

  reactiveFormGroup = new FormGroup({
    selectValue: new FormControl([
      'option_50', 'option_20', 'option_160'
    ]),
  });


  options = [
    ...Array.from(new Array(2000)).map((_, index) =>
      'option_' + index,
    ),
  ];
}
