import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {NgxMatSelectModule} from "../ngx-mat-select";
import {ConfigModule} from "./config/config.module";
import {ClientSideModule} from "./client-side/client-side.module";
import {ServerSideModule} from "./server-side/server-side.module";
import {UsePrimitivesModule} from "./use-primitives/use-primitives.module";
import {CustomTriggerModule} from "./custom-trigger/custom-trigger.module";
import {CustomOptionModule} from "./custom-option/custom-option.module";
import {ChangeValueModule} from "./change-value/change-value.module";
import {GlobalConfigModule} from "./global-config/global-config.module";
import {ExamplesComponent} from "./examples.component";


@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    NgxMatSelectModule,
    ConfigModule,
    ClientSideModule,
    ServerSideModule,
    UsePrimitivesModule,
    CustomTriggerModule,
    CustomOptionModule,
    ChangeValueModule,
    GlobalConfigModule,
  ],
  exports: [ExamplesComponent]
})
export class ExamplesModule {
}
