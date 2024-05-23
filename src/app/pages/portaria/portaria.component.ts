import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Acesso } from '../../models/Acesso'
const ACESSO_API_PRO = 'https://appcaixacad.herokuapp.com/api/auth/';
const ACESSO_API     = 'http://192.168.15.20:4000/acesso/';

interface AcessoResponse{
  AcessoRetorno: Array<any>;
}

const PESSOA_API     = 'http://192.168.15.20:4000/pessoas/';

@Component({
  selector: "app-portaria",
  templateUrl: "portaria.component.html"
})
export class PortariaComponent implements OnInit {
  public formPortaria: FormGroup;
  isCollapsed:boolean;
 
  constructor(
    private http:HttpClient,
    public formBuilder: FormBuilder
  ) {}

   ngOnInit() {
    //  this.formPortaria = new FormGroup({
    //   cpf: new FormControl('')
    // })
    this.formPortaria = this.formBuilder.group(
      {
        cpf: ["", []],
      }
    );
  }

  
  
  // public cpf:number = 0;
  // @ViewChild("cpf") cpf: ElementRef;

  showSwal(type: any) {
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

  private acesso!: Acesso;

  setAcessoParam(acesso:Acesso){
    this.acesso = acesso;
  }
  getAcessoParam():Acesso{
    return this.acesso;
  }

  consultarCPF(){
    // console.log("acionando o botao de busca com o cpf:"+this.cpf);
    // console.log("acionando o botao de busca com o cpf:"+this.formPortaria.get('cpf')?.value+"; ")
    // var retorno  =  this.http.get("http://192.168.15.20:4000/pessoas/consulta/22222222222")

    console.log(this.http.get<Acesso[]>(ACESSO_API));
  }

  get getCpf(){
    return this.formPortaria.get('cpf')?.value!;
  }
    
}


