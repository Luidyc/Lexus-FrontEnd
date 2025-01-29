import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-selecao-nota',
  standalone:true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './selecao-nota.component.html',
  styleUrl: './selecao-nota.component.scss'
})
export class SelecaoNotaComponent implements OnInit,OnChanges{
  @Input() notasFiscais:{id:number,numeroNota:string,selecionada:boolean}[]=[];
  form!:FormGroup;
  
  constructor(
    private fb:FormBuilder,
    private toastrService:ToastrService
  ) {
    this.form= this.fb.group({
      notas:this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['notasFiscais'] && this.notasFiscais.length > 0) {
      this.populateFormArray();
    }
  }

  private populateFormArray(): void {
    const formArray = this.form.get('notas') as FormArray;
    formArray.clear(); // Limpa qualquer dado existente antes de adicionar novos
    this.notasFiscais.forEach((nota) => {
      formArray.push(
        this.fb.group({
          id: [nota.id],
          numeroNota: [nota.numeroNota],
          selecionada: [false],
        })
      );
    });
  }

  get notasArray(): FormArray {
    return this.form.get('notas') as FormArray;
  }

  gerarConferencia() {
    const selecionadas = this.notasArray.controls
    .filter((control)=>control.get('selecionada')?.value)
    .map((control)=> ({
      id:control.get('id')?.value
    }))
    if(selecionadas.length >= 1){
      this.toastrService.success("Conferência sendo iniciada");
      return selecionadas
    }
    else this.toastrService.error("Por favor, selecione alguma Nota Fiscal")
    return selecionadas
    }



}
