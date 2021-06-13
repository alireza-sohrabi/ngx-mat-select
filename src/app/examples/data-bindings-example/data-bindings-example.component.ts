import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-data-bindings-example',
  templateUrl: './data-bindings-example.component.html',
})
export class DataBindingsExampleComponent implements OnInit {

  frm = new FormGroup({
    value3: new FormControl({key: 50, value: 'bank_50'}),
    value4: new FormControl([{key: 60, value: 'bank_60'}, {key: 33, value: 'bank_33'}])
  })

  value1 = {key: 50, value: 'bank_50'};
  list1 = [];

  value2 = [{key: 60, value: 'bank_60'}, {key: 33, value: 'bank_33'}];
  list2 = [];

  list3 = [];

  list4 = [];

  get getMultiValue(): string {
    return this.frm.get('value4').value.map(w => w.value).join(', ')
  }

  constructor() {
    for (let i = 0; i <= 100; i++) {
      const obj1 = {key: i, value: 'bank_' + i};
      const obj2 = {key: i, value: 'bank_' + i};
      const obj3 = {key: i, value: 'bank_' + i};
      const obj4 = {key: i, value: 'bank_' + i};
      this.list1.push(obj1);
      this.list2.push(obj2);
      this.list3.push(obj3);
      this.list4.push(obj4);
    }
  }

  ngOnInit(): void {
  }
}
