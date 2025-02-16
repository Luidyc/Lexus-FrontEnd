import { Component } from '@angular/core';
import { ConferenciaLayoutComponent } from "../../components/conferencia-layout/conferencia-layout.component";
import { TableConferenciaComponent } from "../../components/table-conferencia/table-conferencia.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-conferencia',
    standalone:true,
    imports: [ConferenciaLayoutComponent, MenuComponent],
    templateUrl: './conferencia.component.html',
    styleUrl: './conferencia.component.scss'
})
export class ConferenciaComponent {

}
