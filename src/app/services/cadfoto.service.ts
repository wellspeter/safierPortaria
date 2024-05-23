import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Face } from '../models/Face'
const FACE_API_PRO = 'https://appcaixacad.herokuapp.com/api/auth/';
const FACE_API     = 'http://196.168.1.20:4000/face/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


interface FaceResponse{
  AcessoRetorno: Array<any>;
}

@Injectable({
  providedIn: 'root'
})

export class FaceService {

  constructor(private http: HttpClient) { }

  public cadFace(face:Face):Observable<any>{
    return this.http.post(FACE_API + 'inserir-nova-face', {face },httpOptions);
  }
}
