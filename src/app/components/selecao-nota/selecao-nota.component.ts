import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-selecao-nota',
  standalone:true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './selecao-nota.component.html',
  styleUrl: './selecao-nota.component.scss'
})
export class SelecaoNotaComponent implements OnInit{
  @Input() notasFiscais:{id:number,nome:string}[]=[];
  form!:FormGroup;

  constructor(private fb:FormBuilder) {
    this.form= this.fb.group({
      notas:this.fb.array([]),
    });
  }

  ngOnInit(): void {
    const formArray = this.form.get('notas') as FormArray;
    this.notasFiscais.forEach((nota) => {
      formArray.push(
        this.fb.group({
          id: [nota.id],
          selecionada:[false],
        })
      )
    })
  }

  get notasArray(): FormArray {
    return this.form.get('notas') as FormArray;
  }

  gerarJson() {
    const selecionadas = this.notasArray.controls
      .filter((control)=>control.get('selecionada')?.value)
      .map((control)=> ({
        id:control.get('id')?.value
      }))
      const resultado = {notasFiscais: selecionadas};
      console.log('JSON Final:', resultado);
      return resultado;  
 
    }



}
