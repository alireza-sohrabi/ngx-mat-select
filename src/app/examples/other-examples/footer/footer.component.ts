import {Component, ViewChild} from '@angular/core';
import {NgxMatSelectComponent} from "../../../ngx-mat-select";

@Component({
  templateUrl: './footer.component.html',
  styles: [`
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #FAFAFA;
      padding: 1rem;
    }
  `]
})
export class FooterComponent {
  @ViewChild(NgxMatSelectComponent) selectBox?: NgxMatSelectComponent;
  value = [10, 30, 60];

  options = Array.from(new Array(2000)).map((_, index) => ({
    name: 'options_' + index,
    id: index,
    price: index
  }));

  get totalPrice() {
    let totalPrice = 0

    if (this.selectBox) {
      const selectedItems = this.selectBox.selected as any[];

      if (selectedItems.length > 0) {
        totalPrice = selectedItems.reduce((accumulator, currentValue) => {

            return accumulator + (currentValue?.price || 0);
          }
          , 0)
      }

    }

    return Math.round(totalPrice);
  }

}
