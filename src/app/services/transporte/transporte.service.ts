import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransporteResponse } from '../../types/transporte-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  apiUrl: string = "http://localhost:8080/transporte"

  constructor(private httpClient:HttpClient) { }

  create(motorista:string, placa:string, fotos:string) {
    return this.httpClient.post<TransporteResponse>
    (this.apiUrl,{motorista,placa,fotos}).pipe(
      tap((value)=> {
          sessionStorage.setItem("motorista",value.motorista)
          sessionStorage.setItem("placa", value.placa)
          sessionStorage.setItem("fotos",value.fotos)
      }
    ))
  }

} 
