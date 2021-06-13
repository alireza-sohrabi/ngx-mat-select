import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-mat-select';
  list = [];

  constructor() {
    for (let i = 0; i <= 100 ; i++) {
      this.list.push({key: i, value: 'bank_' + i})
    }
  }
  searcher = (search: string) => {

  }
}
