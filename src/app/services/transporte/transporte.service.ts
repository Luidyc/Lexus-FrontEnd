import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TransporteResponse } from '../../types/transporte-response.type copy';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  apiUrl: string = "http://localhost:8080/Transporte"

  constructor(private httpClient:HttpClient) { }
  
  create(motorista:string, placa:string, fotos:string) {
    const token = sessionStorage.getItem("auth-token")
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    console.log('Headers:', headers.get('Authorization'));
    return this.httpClient.post<TransporteResponse>
    (this.apiUrl,{motorista,placa,fotos},{headers}).pipe(
      tap((value)=> {
          sessionStorage.setItem("motorista",value.motorista)
          sessionStorage.setItem("placa", value.placa)
          sessionStorage.setItem("fotos",value.fotos)
      }
    ))
  }

  getLastTen():Observable<TransporteResponse[]> {
    const token = sessionStorage.getItem("auth-token")
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    return this.httpClient.get<TransporteResponse[]>
    (this.apiUrl+"/last",{headers})
  }

} 
