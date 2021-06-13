import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-mobile-view-example',
  templateUrl: './mobile-view-example.component.html',
})
export class MobileViewExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef<any>;
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

  onToggleChange(): void {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    })
  }

  ngAfterViewInit(): void {
    this.addGist();
  }

  addGist(): void {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body>
        <script type="text/javascript" src="https://gist.github.com/alireza-sohrabi/adf28e9a5e52ce5d2b60ff3be7ccdf96.js"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
