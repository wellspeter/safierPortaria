
import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";

@Component({
  selector: "app-morador-cadastro",
  templateUrl: "morador-cadastro.component.html"
})

export class MoradorCadastroComponent implements OnInit {
  constructor() {}

  isCollapsed:boolean;
  mask:string;
  public cpf: number;

  showSwal(type: any): void {
    if (type == "aceito") {
      swal.fire({
        title: "Autorizado",
        text: "Entrada autorizada pelo morador",
        buttonsStyling: false,
        customClass:{
          confirmButton: "btn btn-success",
        },
        icon: "success"
      })
    }else if(type == "recusado"){
      swal.fire({
        title: "Recusado",
        text: "Nao autorizado a entrada pelo morador",
        customClass:{
          confirmButton: "btn btn-info",
        },
        icon: "error",
        buttonsStyling: false
      });
    }else if(type == "portaria"){
      swal.fire({
        title: "Autorizado",
        text: "Entrada autorizada pela Portaria",
        buttonsStyling: false,
        customClass:{
          confirmButton: "btn btn-success",
        },
        icon: "success"
      })
    }else if(type == "delivery"){
      swal.fire({
        title: "Autorizado",
        text: "Entrada autorizada pela Portaria para delivery",
        buttonsStyling: false,
        customClass:{
          confirmButton: "btn btn-success",
        },
        icon: "success"
      })
    }else if(type == "delivery"){
      swal.fire({
        title: "Atencao",
        text: "Tente novamente",
        buttonsStyling: false,
        customClass:{
          confirmButton: "btn btn-success",
        },
        icon: "warning",
      })
    }
  }

  ngOnInit() {
   
  }

  
    
}


