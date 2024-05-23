import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

import { MoradorCadastroRoutes } from "./morador-cadastro.routing";
import { MoradorCadastroComponent } from "./morador-cadastro.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MoradorCadastroRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    FormsModule,
  ],
  declarations: [MoradorCadastroComponent],
  exports: [MoradorCadastroComponent]
})
export class CadastroMoradorModule {
  public constructor() {
    console.log('morador cadastro module')
  }
}
