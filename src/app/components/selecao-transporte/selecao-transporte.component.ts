import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardModule } from 'primeng/card';
import { ScrollerModule } from 'primeng/scroller';
import { TransporteService } from '../../services/transporte/transporte.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-selecao-transporte',
  standalone:true,
  imports: [CardModule,ScrollerModule,NgFor],
  templateUrl: './selecao-transporte.component.html',
  styleUrl: './selecao-transporte.component.scss'
})
export class SelecaoTransporteComponent implements OnInit{
    transportes:any[]=[];
    @Output() transporteSelecionado = new EventEmitter<number>();

    constructor(
    private toastrService:ToastrService,
    private transporteService:TransporteService
  ) {}

  transporteControl = new FormControl('');

  selecionarTransporte(id:number){
    this.transporteSelecionado.emit(id);
  }

  ngOnInit(): void {
    this.transporteService.getAll().subscribe({
      next: (transportes) => {
        this.transportes = transportes
        this.toastrService.success("Ultimos transportes carregados")
        console.log(transportes)
        }
    });
  }

}
