import {NgDocPage} from '@ng-doc/core';
import {ClientSideModule} from "./client-side.module";
import {WithoutAnyValueComponent} from "./without-any-value/without-any-value.component";
import {PrimitiveComponent} from "./primitive/primitive.component";
import {
  ReactiveFormPrimitiveValueComponent
} from "./reactive-form-primitive-value/reactive-form-primitive-value.component";
import {ReactiveFormObjectValueComponent} from "./reactive-form-object-value/reactive-form-object-value.component";
import {OptionsAtOnceComponent} from "./options-at-once/options-at-once.component";
import {SearchBoxComparisonComponent} from "./search-box-comparison/search-box-comparison.component";

const ClientSidePage: NgDocPage = {
  title: `Client Side`,
  mdFile: './index.md',
  imports: [ClientSideModule],
  demos: {
    WithoutAnyValueComponent,
    PrimitiveComponent,
    ReactiveFormPrimitiveValueComponent,
    ReactiveFormObjectValueComponent,
    OptionsAtOnceComponent,
    SearchBoxComparisonComponent
  },
  order: 3
};

export default ClientSidePage;
