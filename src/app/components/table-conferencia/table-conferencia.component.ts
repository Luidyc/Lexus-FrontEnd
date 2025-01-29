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

    onInputChange(field:string, value:any) {

      console.log(`Atualizando: Valor = ${value}`)
    }

    ngOnInit() {
      
    }
} 
