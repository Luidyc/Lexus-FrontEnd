import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotasResponse } from '../../types/notas-response.type';
import { Observable, tap } from 'rxjs';
import { ItemNota } from '../../types/itemnota-response.type';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  apiUrl : string = "http:localhost:8080/notas"
  constructor(private httpClient:HttpClient) {}

  create(numeroNota:string, itens:ItemNota[]):Observable<NotasResponse> {
    return this.httpClient.post<NotasResponse>
    (this.apiUrl,{numeroNota,itens}).pipe(
      tap((value)=> {
        sessionStorage.setItem("numeroNota",value.numeroNota)
        sessionStorage.setItem("listaItemNota",JSON.stringify(value.itens))
      }
    ))
  }
}
