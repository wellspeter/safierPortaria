import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// import { ChartsModule } from "ng2-charts";
import { ComponentsModule } from "../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { PortariaRoutes } from "./portaria.routing";
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";

import { PortariaComponent } from "./portaria.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PortariaRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [PortariaComponent],
  exports: [PortariaComponent]
})
export class PortariaModule {
  public constructor() {
    console.log('portaria module')
  }
}
