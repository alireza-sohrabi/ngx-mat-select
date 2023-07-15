import {FormGroupDirective, NgForm} from '@angular/forms';
import {Directive} from '@angular/core';
import {NgxMatSelectConfig} from "../ngx-mat-select/pubilc_api";

@Directive()
export abstract class NgxMatSelectExampleForms {
  ngForm?: NgForm;
  formGroupDirective?: FormGroupDirective;
}

export type NgxMatSelectConfigExample = NgxMatSelectConfig &
  Partial<{
    disabled: boolean;
    required: boolean;
    multiple: boolean;
    placeholder: string;
  }>;
