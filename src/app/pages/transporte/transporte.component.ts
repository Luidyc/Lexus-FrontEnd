import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransporteService } from '../../services/transporte/transporte.service';

interface transporteForm {
  motorista:FormControl,
  placa:FormControl,
  fotos:FormControl
}

@Component({
    selector: 'app-transporte',
    imports: [
        DefaultLoginLayoutComponent,
        PrimaryInputComponent,
        ReactiveFormsModule
    ],
    providers: [
        TransporteService,
        ToastrService
    ],
    templateUrl: './transporte.component.html',
    styleUrl: './transporte.component.scss'
})
export class TransporteComponent {
  transporteForm!:FormGroup<transporteForm>;
  constructor(
    private router:Router,
    private transporteService:TransporteService,
    private toastService:ToastrService
  ){
    this.transporteForm = new FormGroup({
      motorista:new FormControl('',[Validators.required,Validators.minLength(3)]),
      placa:new FormControl('',[Validators.required,Validators.minLength(6)]),
      fotos:new FormControl('',[Validators.required])
    })
  }

  submit() {
    console.log(this.transporteForm.value.placa)
    console.log(this.transporteForm.value.motorista)
    console.log(this.transporteForm.value.fotos)
    this.transporteService.create(
      this.transporteForm.value.motorista,
      this.transporteForm.value.placa, 
      this.transporteForm.value.fotos).subscribe({
      next : () => this.toastService.success("Transporte registrado com sucesso"),
      error: ()=> this.toastService.error("Verifique as informações","Criação de transporte falhou:")
    })
  }

  navigate() {
    this.router.navigate([""]);
  }

}
