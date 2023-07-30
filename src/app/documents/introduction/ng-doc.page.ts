import {NgDocPage} from '@ng-doc/core';
import {IntroductionComponent} from "./introduction.component";
import {IntroductionModule} from "./introduction.module";

const IntroductionPage: NgDocPage = {
  title: `Introduction`,
  mdFile: './index.md',
  order: 1,
  demos: {IntroductionComponent},
  imports: [IntroductionModule]

};

export default IntroductionPage;
