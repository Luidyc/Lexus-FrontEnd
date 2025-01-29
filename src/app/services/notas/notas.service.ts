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
  token = sessionStorage.getItem("auth-token")
  headers = new HttpHeaders().set("Authorization",`Bearer ${this.token}`)
  constructor(private httpClient:HttpClient) {}

  formatarDados(apiData: any[]): any[] {
    const resultado: any[] = [];
      apiData.forEach((nota) => {
          resultado.push({
            id: nota.id,
            numeroNota: nota.numeroNota,
            selecionada: false
          });
        });
    return resultado;
  }

  getAll():Observable<any[]> {
    const headers = this.headers;
    return this.httpClient.get<any[]>(
      this.apiUrl,{headers})
  }

  create(notasForm:FormGroup, itens:ItemNota[]):Observable<NotasResponse> {
    const headers = this.headers;
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
