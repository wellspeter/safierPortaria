import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acesso } from '../models/Acesso'
const ACESSO_API_PRO = 'https://appcaixacad.herokuapp.com/api/auth/';
const ACESSO_API     = 'http://192.168.15.20:4000/acesso/';

interface AcessoResponse{
  AcessoRetorno: Array<any>;
}

@Injectable({
  providedIn: 'root'
})

export class AcessoService {

  private acesso!: Acesso;

  setAcessoParam(acesso:Acesso){
    this.acesso = acesso;
  }
  getAcessoParam():Acesso{
    return this.acesso;
  }

  constructor(private http: HttpClient) {
  }

  public getAcessos():Observable<Acesso[]>{
    return this.http.get<Acesso[]>(ACESSO_API);
  }

  public getAcessosTopUltimos(endereco:number):Observable<Acesso[]>{
    return this.http.get<Acesso[]>(ACESSO_API+endereco);
  }

  public cadAcesso(acesso:Acesso):Observable<any>{
    return this.http.post(ACESSO_API+"acesso", acesso);
  }

  public getDadosUsuario(id:number):Observable<Acesso[]>{
    return this.http.get<Acesso[]>(ACESSO_API+"usuario/"+id);
  }

}
