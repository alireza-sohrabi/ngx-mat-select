import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-mobile-view-example',
  templateUrl: './mobile-view-example.component.html',
})
export class MobileViewExampleComponent implements OnInit {
  list = [];
  show = false;

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
