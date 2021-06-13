import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-select-example',
  templateUrl: './multi-select-example.component.html',
})
export class MultiSelectExampleComponent implements OnInit {
  list = [];

  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.list.push({key: i, value: 'bank_' + i})
    }
  }

  ngOnInit(): void {
  }
}
