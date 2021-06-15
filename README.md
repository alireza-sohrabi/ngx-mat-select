# NgxMatSelect

SearchBox, infinite Scroll and Mobile View are embedded into Angular Material Select Component.  
This library was generated for Angular Material to improve select component (mat-select). In this library, I defined a
directive for <mat-select> which generate Search box and Mobile View.

Extra Features, after use this directive:

* Searchable (Client Side And Server Side)
* Mobile View in two ways ('FullScreen' | 'BottomSheet')

RLT support (use dir='rtl' in html tag)

Compatible with Angular SSR (Universal)

<a target="_blank" href="https://stackblitz.com/edit/ngx-mat-select?file=src/app/app.component.html">See demo in
stackblitz</a>

# Installation Guide

The first step is adding ngx-mat-select.styles in angular.json

            "styles": [
              "./node_modules/ngx-mat-select/styles/ngx-mat-select.styles.css"
            ],

The second step is adding NgxMatSelectModule into your Module

    import {MatSelectModule} from "@angular/material/select";
    import {NgxMatSelectModule} from "ngx-mat-select";
    ...
    @NgModule({
      imports: [
      ...
      MatSelectModule,
      NgxMatSelectModule
      ...
      ]
    })

you can define global default configs for root:

    NgxMatSelectModule.forRoot({
        maxWidthForMobileView: 600,
        inFirstLoadCallSearcher: true,
        inFirstLoadSearcherValue: '',
        emptyLabel: 'no entry found',
        noMoreResultLabel: 'no more found',
        useInfiniteScroll: false,
        searchBoxPlaceholder: 'please search',
        maximumResultForShow: 40,
        useMobileView: false,
        valueMember: 'key',
        displayMember: 'value',
        mobileViewType: 'FullScreen'
    })

or using token (NGX_MAT_SELECT_CONFIGS) in providers:

      providers: [
      {provide: NGX_MAT_SELECT_CONFIGS, useValue: ngxMatSelectConfigs}
      ],

# Samples

<b>Client Side Search  (BottomSheet View In Mobile)</b>

Template:

      <mat-form-field>
        <mat-select
          ngxMatSelect
          [hasSearchBox]="true"
          [useMobileView]="true"
          mobileViewType="BottomSheet"
          [(ngModel)]="bankValue"
          [multiple]="false"
          name="bank"
          [required]="true"
          [source]="source"
          [displayMember]="'value'"
          [valueMember]="'key'"
          #sf="ngxMatSelect"
        >
          <mat-option [value]="option" *ngFor="let option of sf.filteredSource">
            {{option.value}}
          </mat-option>
        </mat-select>
    
      </mat-form-field>

component.ts:

    export class MyComponent implements OnInit {

      bankValue = {key: 50, value: 'Bank_50'};
      source: any[] = [];

      ngOnInit(): void {
          for (let i = 0; i < 100; i++) {
           this.source.push({value: 'Bank_' + i, key: i})
          }
      }

    }

<b>Client Side Search ( FullScreen View In Mobile) </b>

Template:

      <mat-form-field>
        <mat-select
          ngxMatSelect
          [hasSearchBox]="true"
          [useMobileView]="true"
          mobileViewType="FullScreen"
          [(ngModel)]="bankValue"
          [multiple]="true"
          name="bank"
          [required]="true"
          [source]="source"
          [displayMember]="'value'"
          [valueMember]="'key'"
          #sf="ngxMatSelect"
        >
          <mat-option [value]="option" *ngFor="let option of sf.filteredSource">
            {{option.value}}
          </mat-option>
        </mat-select>
    
      </mat-form-field>

component.ts:

    export class MyComponent implements OnInit {
      bankValue = [{key: 10, value: 'Bank_10'},{key: 75, value: 'Bank_75'}];
      source: any[] = [];

      ngOnInit(): void {
          for (let i = 0; i < 100; i++) {
           this.source.push({value: 'Bank_' + i, key: i})
          }
      }

    }

<b>Server Side Search </b>
Template:

      <mat-form-field>
        <mat-select
          ngxMatSelect
          [lazyLoad]="true"
          [searcher]="bankSearcher.bind(this)"
          [hasSearchBox]="true"
          [useMobileView]="true"
          mobileViewType="FullScreen"
          [(ngModel)]="bankValue"
          [multiple]="true"
          name="bank"
          [required]="true"
          [source]="source"
          [displayMember]="'value'"
          [valueMember]="'key'"
          #sf="ngxMatSelect"
        >
          <mat-option [value]="option" *ngFor="let option of sf.filteredSource">
            {{option.value}}
          </mat-option>
        </mat-select>
    
      </mat-form-field>

component.ts:

    import {Observable} from "rxjs";
    import {of} from 'rxjs';

    export class MyComponent implements OnInit {
      bankValue = [{key: 10, value: 'Bank_10'},{key: 75, value: 'Bank_75'}];
      source: any[] = [];

      ngOnInit(): void {
          for (let i = 0; i < 100; i++) {
           this.source.push({value: 'Bank_' + i, key: i})
          }
      }

      // server side mock search by 'of Observable'
      bankSearcher = (search: string, pageNumber: number, pageSize: number): Observable<any[]> => {
          return of(this.source.filter(w => w.value.includes(search)));
      }

    }

# Input Properties

<table >
<thead>
  <th>Property</th>
  <th>Default Value</th>
  <th>Options</th>
  <th>Description</th>
</thead>
<tbody>

  <tr>
    <td>emptyLabel</td>
    <td>No results found</td>
    <td>string</td>
    <td>label for no result found after search</td>
  </tr>

  <tr>
  <td>searchBoxPlaceholder</td>
  <td>Search ...</td>
  <td>string</td>
  <td>`placeholder` for search box</td>
  </tr>

  <tr>
  <td>maximumResultForShow</td>
  <td>30</td>
  <td>number</td>
  <td>
  For better performance (especially in mobile), you must set
  maximum record for showing the records
  </td>
  </tr>

  <tr>
  <td>valueMember</td>
  <td>id</td>
  <td>string</td>
  <td>when your value is an object, it must be defined</td>
  </tr>

  <tr>
  <td>displayMember</td>
  <td>name</td>
  <td>string</td>
  <td>for searching, it must be defined</td>
  </tr>

  <tr>
  <td>maxWidthForMobileView</td>
  <td>599.9</td>
  <td>number</td>
  <td>unit is px</td>
  </tr>

  <tr>
  <td>useMobileView</td>
  <td>true</td>
  <td>boolean</td>
  <td>if this value is true and your screen width is
  less than value of maxWidthForMobileView,
  'mat-select' Will be displayed in 'FullScreen' or 
  'Bottom Sheet'
</td>
  </tr>

<tr>
<td>mobileViewType</td>
<td>'FullScreen' | 'BottomSheet'</td>
<td>string</td>
<td></td>
</tr>

<tr>
<td>lazyLoad</td>
<td>false</td>
<td>boolean</td>
<td>for use searcher function, it must be true</td>
</tr>

<tr>
<td>source</td>
<td>[]</td>
<td>any[]</td>
<td>Initial source(it can be big data)</td>
</tr>

<tr>
<td>filteredSource</td>
<td>[]</td>
<td>any[]</td>
<td>filtered data(you receive filtered records from 'NgxMatSelect' directive)</td>
</tr>

<tr>
<td>searcher</td>
<td>(search: string, pageNumber: number, pageSize: number) => Observable<[]></td>
<td>Function</td>
<td>for use lazy load you must define function that return ObserverOfArray</td>
</tr>

<tr>
<td>hasSearchBox</td>
<td>true</td>
<td>boolean</td>
<td></td>
</tr>

<tr>
<td>title</td>
<td>null</td>
<td>string</td>
<td></td>
</tr>
<tr>
  <td>inFirstLoadCallSearcher</td>
  <td>false</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
  <td>inFirstLoadSearcherValue</td>
  <td style="text-align: center">''</td>
<td>string</td>
<td></td>
</tr>
<tr>
  <td>useInfiniteScroll</td>
  <td >false</td>
<td>boolean</td>
<td></td>
</tr>
</tbody>
</table>

