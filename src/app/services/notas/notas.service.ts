import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotasResponse } from '../../types/notas-response.type';
import { Observable, tap } from 'rxjs';
import { ItemNota } from '../../types/itemnota-response.type';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  apiUrl : string = "http://localhost:8080/NotaFiscal"
  constructor(private httpClient:HttpClient) {}

  create(notasForm:FormGroup, itens:ItemNota[]):Observable<NotasResponse> {
    const token = sessionStorage.getItem("auth-token")
    const headers = new HttpHeaders().set("Authorization",`Bearer ${token}`)
    return this.httpClient.post<NotasResponse>(
      this.apiUrl,
      {
        numeroNota:notasForm.get("numeroNota")?.value,
        transporte:{id:notasForm.get("transporte.id")?.value},
        itens
      },{headers}).pipe(
      tap((value)=> {
        sessionStorage.setItem("numeroNota",value.numeroNota)
        sessionStorage.setItem("id",value.transporte.id.toString())
        sessionStorage.setItem("listaItemNota",JSON.stringify(value.itens))
      }
    ))
  }
}
