import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-select-example',
  templateUrl: './single-select-example.component.html',
})
export class SingleSelectExampleComponent implements OnInit {

  list = [];
  value = null;

  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.list.push({key: i, value: 'bank_' + i})
    }
  }

  ngOnInit(): void {
  }
}
