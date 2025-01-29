import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DefaultLoginLayoutComponent } from "../default-login-layout/default-login-layout.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelecaoNotaComponent } from "../selecao-nota/selecao-nota.component";
import { TableConferenciaComponent } from "../table-conferencia/table-conferencia.component";
import { ConferenciaService } from '../../services/conferencia/conferencia.service';
import { NotasService } from '../../services/notas/notas.service';


interface ColumnConferencia {
  titulo:string
  campo:string
  tipo:string
}


interface Column {
  field:string,
  header:string
}

interface NotaFiscal {
  id: number;
  numeroNota: string;
  selecionada: boolean; // Para indicar se a nota está selecionada
}



  

@Component({
    selector: 'app-conferencia-layout',
    standalone:true,
    imports: [TableModule, CommonModule, DefaultLoginLayoutComponent, ReactiveFormsModule, SelecaoNotaComponent, TableConferenciaComponent],
    templateUrl: './conferencia-layout.component.html',
    styleUrl: './conferencia-layout.component.scss'
})
export class ConferenciaLayoutComponent implements OnChanges{
  @ViewChild(SelecaoNotaComponent) selecaoNota!: SelecaoNotaComponent
  conferenciaForm!:FormGroup;
  displayedCollums!: Column[];
  ColumnConferencia!: ColumnConferencia[];
  show=true

  dataSource!:any[];
  notasFiscais: NotaFiscal[] = [];

  constructor(
        private conferenciaService:ConferenciaService,
        private notaFiscalService:NotasService,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  submit() {
    const selecionadas = this.selecaoNota.gerarConferencia();
    
    if(selecionadas.length > 0 ) {
      this.conferenciaService.create(selecionadas).subscribe({
        next:(response) => {
          this.conferenciaService.getAll().subscribe({
            next:(data)=>{this.dataSource = this.transformarDados(data)
            },
            error:(error)=> {console.log("gpteco")}
          })
        }
      })
    }
  }

    

  transformarDados(apiData: any[]): any[] {
    const resultado: any[] = [];
    
    apiData.forEach(conferencia => {
      conferencia.notasFiscais.forEach((nota: { numeroNota:any,itens: any[]; }) => {
        nota.itens.forEach(item => {
          resultado.push({
            id: conferencia.id,
            numeroNota: nota.numeroNota,
            conferente: conferencia.conferente,
            nomeProduto: item.produto.nomeProduto,
            qntdDaNota: item.qntdDaNota,
            qntdConferida: item.qntdConferida
          });
        });
      });
    });
  
    return resultado;
  }

  ngOnInit() {
    this.ColumnConferencia=[
      {titulo:"ID",campo:"id",tipo:"number"},
      {titulo:"Numero da Nota",campo:"numeroNota",tipo:"string"},
      {titulo:"Nome Produto",campo:"nomeProduto",tipo:"string"},
      {titulo:"Quantidade da Nota",campo:"qntdDaNota",tipo:"number"},
      {titulo:"Quantidade Conferida",campo:"qntdConferida",tipo:"number"},
      {titulo:"Conferente",campo:"conferente",tipo:"number"}
    ]
    this.conferenciaService.getAll().subscribe({
      next:(data) => {
        this.dataSource = []
      },
      error: (error) => {
        console.log("Fez errado otário", error)
      }
    })
    this.notaFiscalService.getAll().subscribe({
      next:(data) => {
        console.log(data)
        this.notasFiscais = data
      }
    }
  )
  }
  
}
