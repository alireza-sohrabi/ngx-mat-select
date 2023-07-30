import {NgDocPage} from '@ng-doc/core';
import {CustomOptionModule} from "./custom-option.module";
import {CustomOptionComponent} from "./custom-option.component";
import OtherExamplesCategory from "../ng-doc.category";

const CustomOptionLabelPage: NgDocPage = {
  title: `Custom Option Label`,
  mdFile: './index.md',
  order: 2,
  imports: [CustomOptionModule],
  demos: {CustomOptionComponent},
  category: OtherExamplesCategory
};

export default CustomOptionLabelPage;
