import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

export interface ColumnConferencia {
  titulo:string
  campo:string
  tipo:string
}



@Component({
  selector: 'app-table-conferencia',
  imports: [NgFor,TableModule,CommonModule],
  templateUrl: './table-conferencia.component.html',
  styleUrl: './table-conferencia.component.scss'
})



export class TableConferenciaComponent {
    @Input() columnsElements:ColumnConferencia[] =[];
    @Input() dataSource:any[] = [];

    getValueByPath(row: any, path: string): any {
      console.log(row+" "+path)
      return path.split('.').reduce((acc, key) => (acc ? acc[key] : null), row);
    }

    ngOnInit() {
      console.log('Test getValueByPath:', this.getValueByPath(this.dataSource[0], 'Itens.0.Produto.nomeProduto'));
    }
} 
