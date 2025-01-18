import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimaryInputComponent } from '../primary-input/primary-input.component';
import { NotasComponent } from '../../pages/notas/notas.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface ItemNota {
  produto:Produto,
  qntdDaNota:number
}

export interface Produto {
  codigo: number,
  nomeProduto: string
}

@Component({
  selector: 'app-modal-manual',
  standalone: true,
  imports: [PrimaryInputComponent,ReactiveFormsModule],
  providers:[ToastrService],
  templateUrl: './modal-manual.component.html',
  styleUrl: './modal-manual.component.scss'
})
export class ModalManualComponent {
  notasForm!:FormGroup;
  @Input() title:string = "";
  @Input() primaryBtnText:string ="";
  @Input() disablePrimaryBtn:boolean = true;
  @Output() submit: EventEmitter<ItemNota> = new EventEmitter();

  constructor(
    private toastrService:ToastrService
  ){
    this.notasForm = new FormGroup({
      produto: new FormGroup({
        nomeProduto: new FormControl('', [Validators.required, Validators.min(3)]),
        codigo: new FormControl(null, [Validators.required, Validators.min(1)]),
      }),
      qntdDaNota: new FormControl(0, [Validators.required, Validators.min(1)]),
    })
  }  

  salvandoItem() { 
    if(this.notasForm.valid) {
      const item: ItemNota = this.notasForm.value as ItemNota;
      this.toastrService.success("Item adicionado com sucesso!");
      console.log("Adicionando a lista "+item);
      this.submit.emit(item);
      this.notasForm.reset();
    } 
    else {
    console.log("errado papa");
    this.toastrService.error("Item não foi adicionado");
    }

    if(this.notasForm.dirty && this.notasForm.touched) {
      this.notasForm.reset();
    }
  }


}