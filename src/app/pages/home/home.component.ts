import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ConferenciaService } from '../../services/conferencia/conferencia.service';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

interface Produto {
  codigo: number;
  nomeProduto: string;
}

interface Item {
  id: number;
  produto: Produto;
  qntdConferida: number;
  qntdDaNota: number;
}

interface Transporte {
  id: number;
  motorista: string;
  placa: string;
  fotos: string;
}

interface NotaFiscal {
  id: number;
  transporte: Transporte;
  itens: Item[];
  numeroNota: string;
}

interface Conference {
  id: number;
  dataConfencia: string;
  conferente: string;
  notasFiscais: NotaFiscal[];
  divergencias: any[];
}
@Component({
  selector: 'app-home',
  imports: [CommonModule,Menubar],
  providers:[DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

    username: string = '';
    conferences: Conference[] = [];
    items: MenuItem[] | undefined;
  
    constructor(
      private conferenceService: ConferenciaService,
      private datePipe: DatePipe
    ) {}
  
    ngOnInit(): void {
      this.items = [
        {
          label:'Home',
          icon:'pi pi-home'
        },
        {
          label:'Transporte',
          icon:'pi-pi-star'
        }
      ]

      // Exemplo de obtenção do nome do usuário
      this.username = this.conferenceService.getUser()
  
      // Exemplo de obtenção das conferências
      this.conferenceService.getAll().subscribe(confs => {
        this.conferences = confs;
      });
  
      // Dados mockados para exemplo
      this.conferences = [{
        "id": 1,
        "dataConfencia": "2029-01-26T13:29:30.2349025",
        "conferente": "GALVÃO",
        "notasFiscais": [
          {
            "id": 31,
            "transporte": {
              "id": 1,
              "motorista": "SERG",
              "placa": "T-R1",
              "fotos": "T-V2"
            },
            "itens": [
              {
                "id": 9,
                "produto": {
                  "codigo": 2911,
                  "nomeProduto": "SOLDADOR"
                },
                "qntdConferida": -100,
                "qntdDaNota": 4059412
              }
            ],
            "numeroNota": "FUIDF"
          }
        ],
        "divergencias": []
      }];
    }
  
    formatDate(date: string): string {
      return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm') || '';
    }
  
}
