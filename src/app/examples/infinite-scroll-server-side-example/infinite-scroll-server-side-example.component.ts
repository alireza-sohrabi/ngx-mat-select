import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-infinite-scroll-server-side-example',
  templateUrl: './infinite-scroll-server-side-example.component.html',
})
export class InfiniteScrollServerSideExampleComponent implements OnInit {
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
