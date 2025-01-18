import { Component } from '@angular/core';
import { ConferenciaLayoutComponent } from "../../components/conferencia-layout/conferencia-layout.component";

@Component({
  selector: 'app-conferencia',
  standalone: true,
  imports: [ConferenciaLayoutComponent],
  templateUrl: './conferencia.component.html',
  styleUrl: './conferencia.component.scss'
})
export class ConferenciaComponent {

}
