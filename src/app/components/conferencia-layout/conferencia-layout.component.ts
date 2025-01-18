import { Component, NgModule } from '@angular/core';
import { NotaInputComponent } from "../nota-input/nota-input.component";
import { ItemNota } from '../../types/itemnota-response.type';
import { NotasResponse } from '../../types/notas-response.type';

interface conferencia {
  numeroNota: string
  listaItemNota:ItemNota[]
}

interface PeriodicElement {
  position:number,
  name:string,
  weight: number,
  symbol:string,
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-conferencia-layout',
  standalone: true,
  imports: [NotaInputComponent],
  templateUrl: './conferencia-layout.component.html',
  styleUrl: './conferencia-layout.component.scss'
})
export class ConferenciaLayoutComponent {
  displayedCollums: string[] = ['Código','Produto','Quantidade','Conferência'];
  dataSouce = ELEMENT_DATA;
}
