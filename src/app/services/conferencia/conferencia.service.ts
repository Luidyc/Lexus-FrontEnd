import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConferenciaRequest } from '../../types/conferencia-request.type';


@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {
  apiUrl : string = "http://localhost:8080/Conferencia"
  constructor(private httpClient:HttpClient) {}
  
  getAll():Observable<any[]> {
    console.log(this)
    return this.httpClient.get<any[]>(this.apiUrl)
  }

  create(notasFiscais:ConferenciaRequest[]):Observable<ConferenciaRequest> {
    return this.httpClient.post<ConferenciaRequest>
    (this.apiUrl,{notasFiscais}).pipe(
      tap((value)=> {
        sessionStorage.setItem("notasFiscais",value.id)
      }
    ))
   }
}
