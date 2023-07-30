import {NgDocPage} from '@ng-doc/core';
import OtherExamplesCategory from "../ng-doc.category";
import {MultipleDisplayTypeModule} from "./multiple-display-type.module";
import {MultipleDisplayTypeComponent} from "./multiple-display-type.component";

const MultipleDisplayTypePage: NgDocPage = {
	title: `Multiple Display Type`,
	mdFile: './index.md',
  order: 3,
  category: OtherExamplesCategory,
  demos: {MultipleDisplayTypeComponent},
  imports: [MultipleDisplayTypeModule]
};

export default MultipleDisplayTypePage;
