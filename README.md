# NgxMatSelect

It is an independent component like mat-select and a solution for handling
SearchBox, VirtualScroll and InfiniteScroll which the Angular material select-box does not support them by it-self.

Extra Advantages that you'll gain more than using mat-select:

* `Searchable` in the both client and server side modes
* `Virtual Scroll` in the both client and server side modes as well
* `Infinite Scroll` in the server side mode

RLT support (use dir='rtl' in html tag)

<a target="_blank" href="https://alireza-sohrabi.github.io/ngx-mat-select">Documents `Online`
</a>

<a target="_blank" href="https://alireza-sohrabi.github.io/ngx-mat-select/#/other-examples/customize">Customize `Online`
</a>

<a target="_blank" href="https://stackblitz.com/edit/ngx-mat-select?file=src/app/app.component.html">Source Code 
`Stackblitz`</a>


# Version compatibility

| Angular Material | 	NgxMatSelect |
|------------------|---------------|
| 16.x.x           | 	>= 16        | 
| 15.x.x           | 	>= 15        | 
| 14.x.x           | 	>= 14        | 


# Installation Guide

* the first step is to initial ngx-mat-select theme like the other
  Angular Material Components

  for example add the following line in the styles.scss file:

      @use "ngx-mat-select" as ngxMatSelect; 
       or
      @use "node_modules/ngx-mat-select" as ngxMatSelect; 

  then apply your Angular Material Theme to the ngxMatSelect theme

        @include ngxMatSelect.theme($your-theme);
        @include ngxMatSelect.typography($your-typography);

  if you want to use dark-theme and light-theme:

        .darkMode {
            ...
            @include ngxMatSelect.theme($your-dark-theme);
        }


* The second step is to add NgxMatSelectModule into your Module

      import {NgxMatSelectModule} from "ngx-mat-select";
      ...
      @NgModule({
       imports: [
        ...
        NgxMatSelectModule
        ...
        ]
      })

# you can define some global default configs:

      providers: [
      {
        provide: NGX_MAT_SELECT_CONFIG, 
        useValue: {
                  viewType?: NgxMatSelectViewType;
                  hasBackButton?: boolean;
                  multipleDisplay?: NgxMatSelectMultipleDisplay;
                  dataKey?: string;
                  optionLabel?: string;
                  optionValue?: string;
                  panelWidth?: string | number | null;
                  overlayPanelClass?: string | string[];
                  optionHeight?: number;
                  panelHeight?: number;
                }}
      ],



