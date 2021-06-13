import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-mat-select';
  @ViewChild('iframe1') iframe1: ElementRef<any>;
  @ViewChild('iframe2') iframe2: ElementRef<any>;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.addGist('https://gist.github.com/alireza-sohrabi/55d6315465dc7cee1a9c9785a83bb995.js', this.iframe1);
    this.addGist('https://gist.github.com/alireza-sohrabi/da985d8a2e03f89d4448aa7dfacf51c5.js', this.iframe2);

  }

  addGist(src: string, frm): void {
    const doc = frm.nativeElement.contentDocument || frm.nativeElement.contentElement.contentWindow;
    const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body>
        <script type="text/javascript" src="${src}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
