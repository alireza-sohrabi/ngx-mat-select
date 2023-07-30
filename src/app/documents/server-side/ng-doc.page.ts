import {NgDocPage} from '@ng-doc/core';
import {ServerSideModule} from "./server-side.module";
import {FetchOptionsComponent} from "./fetch-options/fetch-options.component";
import {ObjectValueComponent} from "./object-value/object-value.component";
import {PrimitiveValueComponent} from "./primitive-value/primitive-value.component";

const ServerSidePage: NgDocPage = {
  title: `Server Side`,
  mdFile: './index.md',
  imports: [ServerSideModule],
  demos: {FetchOptionsComponent, ObjectValueComponent, PrimitiveValueComponent},
  order: 4,
};

export default ServerSidePage;
