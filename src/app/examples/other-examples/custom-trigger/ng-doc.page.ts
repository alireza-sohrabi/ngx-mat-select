import {NgDocPage} from '@ng-doc/core';
import OtherExamplesCategory from "../ng-doc.category";
import {CustomTriggerComponent} from "./custom-trigger.component";
import {CustomTriggerModule} from "./custom-trigger.module";

const CustomTriggerPage: NgDocPage = {
  title: `Custom Trigger`,
  mdFile: './index.md',
  category: OtherExamplesCategory,
  order: 1,
  imports: [CustomTriggerModule],
  demos: {CustomTriggerComponent}
};

export default CustomTriggerPage;
