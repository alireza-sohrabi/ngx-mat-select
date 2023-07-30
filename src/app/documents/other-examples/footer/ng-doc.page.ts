import {NgDocPage} from '@ng-doc/core';
import OtherExamplesCategory from "../ng-doc.category";
import {FooterModule} from "./footer.module";
import {FooterComponent} from "./footer.component";

const FooterPage: NgDocPage = {
	title: `Panel With Footer`,
	mdFile: './index.md',
  category: OtherExamplesCategory,
  demos: {FooterComponent},
  imports: [FooterModule],
  order: 5
};

export default FooterPage;
