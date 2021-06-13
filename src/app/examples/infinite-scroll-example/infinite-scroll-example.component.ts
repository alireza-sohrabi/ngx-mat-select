import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-example',
  templateUrl: './infinite-scroll-example.component.html',
})
export class InfiniteScrollExampleComponent implements OnInit {
  list = [];

  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.list.push({key: i, value: 'bank_' + i})
    }
  }

  ngOnInit(): void {
  }


}
