import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenMensageria } from '../models/tokenmensageria';
import { Observable } from 'rxjs';

const API_TOKEN_MENS_PRO = 'https://appcaixacad.herokuapp.com/token-mensageria';
const API_TOKEN_MENS_DES = 'http://192.168.15.20:4000/tokenMensageria';

// http://192.168.15.20:4000/tokenMensageria/cad

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class TokenService {
  constructor(private http: HttpClient) { }

  private tokenMensageria!: tokenMensageria;

  setTokenParam(acesso:tokenMensageria){
    this.tokenMensageria = acesso;
  }
  getTokenParam():tokenMensageria{
    return this.tokenMensageria;
  }

  salvarToken(tokenMensageria:tokenMensageria):Observable<any>{
    return this.http.post(API_TOKEN_MENS_DES+'/cad',tokenMensageria);
  }


  // cadastra(cliente:ClientePF){
  //   this.http.post(this.API_CLIENTE_DES + '/cadastrar', cliente).subscribe(
  //     resultado => alert('Cliente foi cadastrado'),
  //     (err) => console.log('erro ao cadastrar o cliente')
  //   );
  // }

  // cadastrarFake(cliente:ClientePF){
  //   return this.API_CLIENTE_DES;
  // }
}
