import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-single-select-example',
  templateUrl: './single-select-example.component.html',
})
export class SingleSelectExampleComponent implements OnInit {

  list = [];

  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.list.push({key: i, value: 'bank_' + i})
    }
  }

  searcher = (search: string, pageNumber: number, pageSize: number): Observable<any[]> => {
    // searcher must return Observable in this method use rxjs of
    const filtered = this.list.filter(z => z.value.includes(search)).slice((pageNumber - 1) * pageSize, (pageNumber * pageSize));
    return of(filtered);
  }

  ngOnInit(): void {
  }
}
