import { Component, NgModule, Optional } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DefaultLoginLayoutComponent } from "../default-login-layout/default-login-layout.component";
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelecaoNotaComponent } from "../selecao-nota/selecao-nota.component";
import { TableConferenciaComponent } from "../table-conferencia/table-conferencia.component";
import { ConferenciaService } from '../../services/conferencia/conferencia.service';

interface ColumnConferencia {
  titulo:string
  campo:string
  tipo:string
}

interface Conferencia {
  numeroNota: string
  motorista:string
  placa:string
  quantidadeDeItens: number
  status:string
}

interface Column {
  field:string,
  header:string
}

interface NotaFiscal {
  id: string;
  numero: string;
  dataEmissao: string;
  selecionada: boolean; // Para indicar se a nota está selecionada
}


const ELEMENT_DATA: Conferencia[] = [
  {numeroNota: '202341', motorista: 'Hydrogen', placa: 'JYX-OEWR',quantidadeDeItens: 1.0079, status: 'COMPLETED'},
  {numeroNota: '202341', motorista: 'Helium', placa:'FXSD-DD',quantidadeDeItens: 4.0026, status: 'PENDENTE'},
  {numeroNota: '202431', motorista: 'Lithium', placa:'ORXER',quantidadeDeItens: 6.941, status: 'CRIADA'},
  {numeroNota: '202312', motorista: 'Beryllium', placa:'FJX2911',quantidadeDeItens: 9.0122, status: 'PENDENTE'}
];

  

@Component({
    selector: 'app-conferencia-layout',
    standalone:true,
    imports: [TableModule, CommonModule, DefaultLoginLayoutComponent, ReactiveFormsModule, SelecaoNotaComponent, TableConferenciaComponent],
    templateUrl: './conferencia-layout.component.html',
    styleUrl: './conferencia-layout.component.scss'
})
export class ConferenciaLayoutComponent {
  
  conferenciaForm!:FormGroup;
  displayedCollums!: Column[];
  ColumnConferencia!: ColumnConferencia[];

  dataSource!:any[];
  conferencias = ELEMENT_DATA;
  notasFiscais: NotaFiscal[] = [
    { id: '1', numero: '2025-001', dataEmissao: '2025-01-04',selecionada:false },
    { id: '2', numero: '2025-002', dataEmissao: '2025-01-03',selecionada:false },
    { id: '3', numero: '2025-003', dataEmissao: '2025-01-02',selecionada:false },
  ];

  notasSemConferir:any=[
    { id: 6, nome: "Nota Fiscal 1" },
    { id: 7, nome: "Nota Fiscal 2" },
    { id: 8, nome: "Nota Fiscal 3" },
    { id: 8, nome: "Nota Fiscal 3" },
    { id: 8, nome: "Nota Fiscal 3" },
    { id: 8, nome: "Nota Fiscal 3" },
    { id: 8, nome: "Nota Fiscal 3" },
    { id: 8, nome: "Nota Fiscal 3" },
    { id: 8, nome: "Nota Fiscal 3" }
  ]

  constructor(
        private fb: FormBuilder,
        private conferenciaService:ConferenciaService,
  ) {
    this.conferenciaForm = this.fb.group({
      notas: this.fb.array(
        this.notasFiscais.map(() =>
          this.fb.group({
            selecionada: [true],
          })
        )
      ),
    });
  }



  get notasArray(): FormArray {
    return this.conferenciaForm.get('notas') as FormArray;
  }

  confirmarSelecao() {
    const notasSelecionadas = this.notasFiscais.filter((_, index) =>
      this.notasArray.at(index).get('selecionada')?.value
    );

    console.log('Notas Selecionadas:', notasSelecionadas);
    // Aqui você pode enviar os dados selecionados para o backend ou realizar outra ação
  }
  

  ngOnInit() {
    this.displayedCollums = [
      {field:'conferente', header:'conferente'},
      {field:'motorista', header:'Motorista'},
      {field:'placa',header:'Placa'},
      {field:'quantidadeDeItens',header:'Total de Itens'},
      {field:'status',header:'Status'}
    ]

    this.ColumnConferencia=[
      {titulo:"ID",campo:"id",tipo:"number"},
      {titulo:"Numero da Nota",campo:"notasFiscais.1.numeroNota",tipo:"string"},
      {titulo:"Nome Produto",campo:"notasFiscais.0.itens.0.produto.0.nomeProduto",tipo:"string"},
      {titulo:"Quantidade da Nota",campo:"notasFiscais.0.itens.0.qntdDaNota.",tipo:"number"},
      {titulo:"Quantidade Conferida",campo:"Itens.0.qntdConferida",tipo:"number"},
      {titulo:"Divergência",campo:"conferente",tipo:"number"}
    ]
    
    this.conferenciaService.getAll().subscribe({
      next:(data) => {
        this.dataSource = data
      },
      error: (error) => {
        console.log("Fez errado otário", error)
      }
    }) 
  }
  
}
