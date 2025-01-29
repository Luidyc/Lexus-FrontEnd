import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotaInputComponent } from "../../components/nota-input/nota-input.component";
import { NotasService } from '../../services/notas/notas.service';
import { ModalManualComponent } from "../../components/modal-manual/modal-manual.component";
import { ItemNota } from '../../types/itemnota-response.type';
import { NgFor, NgIf } from '@angular/common';

interface Transporte {
  idTransporte:Number
}



@Component({
    selector: 'app-notas',
    standalone:true,
    imports: [
        DefaultLoginLayoutComponent,
        PrimaryInputComponent,
        ReactiveFormsModule,
        NotaInputComponent,
        ModalManualComponent,
        NgFor,
        NgIf,
        ModalManualComponent,
    ],
    providers: [
        NotasService,
        ToastrService
    ],
    templateUrl: './notas.component.html',
    styleUrl: './notas.component.scss'
})
export class NotasComponent {
  notasForm!:FormGroup;

  show: boolean = false;
  listaItemNota: ItemNota[] = [];
  
  constructor(
    private router:Router,
    private notasService:NotasService,
    private toastService:ToastrService
  )
  
  {
    this.notasForm = new FormGroup({
      numeroNota:new FormControl('',[Validators.required,Validators.minLength(3)]),
      transporte: new FormGroup({
        id: new FormControl('', [Validators.required]) // Campo ID do transporte
      })
    })
  }

  submit() {
    console.log(this.notasForm.value)
    this.notasService.create(this.notasForm,this.listaItemNota).subscribe({
      next : () => this.toastService.success("Nota salva com sucesso"),
      error: ()=> this.toastService.error("Verifique as informações","Nota fiscal não salva")
    })
  }

  navigate() {
    this.router.navigate(["/transporte"]);
  }

  manual() {
    console.log("Manual")
    this.show = !this.show;
  }

  import() {
    console.log("Criando por import")
  }

  addItemNota(item : ItemNota){
    this.listaItemNota.push(item);
    console.log("item adicionado");
    console.log(this.listaItemNota)
  }


}
