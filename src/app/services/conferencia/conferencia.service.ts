import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConferenciaRequest } from '../../types/conferencia-request.type';


@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {
  apiUrl : string = "http://localhost:8080/Conferencia"
  token = sessionStorage.getItem("auth-token")
  user = sessionStorage.getItem("username")?.valueOf()
  headers = new HttpHeaders().set("Authorization",`Bearer ${this.token}`)

  constructor(private httpClient:HttpClient) {}

  getUser() {
    if(this.user!= null) {return this.user}
    return ''

  }

  getAll():Observable<any[]> {
    const headers=this.headers;
    return this.httpClient.get<any[]>(this.apiUrl,{headers})
  }

  getById(id:number):Observable<any> {
    const headers=this.headers;
    return this.httpClient.get<any[]>(this.apiUrl+`/${id}`,{headers})
  }


  create(notasFiscais:ConferenciaRequest[]):Observable<ConferenciaRequest> {
    const headers = this.headers
    return this.httpClient.post<ConferenciaRequest>
    (this.apiUrl,{notasFiscais},{headers}).pipe(
      tap((value)=> {
        sessionStorage.setItem("Transporte",value.id.toString())
      }
    ))
   }



}
