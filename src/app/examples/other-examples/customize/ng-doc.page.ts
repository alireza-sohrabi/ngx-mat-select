import {NgDocPage} from '@ng-doc/core';
import OtherExamplesCategory from '../ng-doc.category';
import {CustomizeComponent} from "./customize.component";
import {CustomizeModule} from "./customize.module";

const CustomizePage: NgDocPage = {
  title: `Customize Select Box`,
  mdFile: './index.md',
  category: OtherExamplesCategory,
  order: 6,
  imports: [CustomizeModule],
  demos: {CustomizeComponent},
};

export default CustomizePage;
