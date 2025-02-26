import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { HomeComponent } from '../home/home.component';

interface LoginForm{
  username:FormControl,
  password:FormControl
}

@Component({
    selector: 'app-login',
    imports: [
        DefaultLoginLayoutComponent,
        PrimaryInputComponent,
        ReactiveFormsModule
    ],
    providers: [
        LoginService,
        ToastrService,
        Router
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup<LoginForm>;
  constructor(
    private router:Router,
    private loginService:LoginService,
    private toastService:ToastrService,
  ){
    this.loginForm = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  submit() {
    console.log(this.loginForm.value.username)
    console.log(this.loginForm.value.password)
    this.loginService.login(this.loginForm.value.username,this.loginForm.value.password).subscribe({
      next : () => {this.toastService.success("Acessando o sistema ..."), this.router.navigate(["/home"])},
      error: ()=> this.toastService.error("Verifique as informações","Erro ao acessar")
    })
  }

  navigate() {
    this.router.navigate(["/recovery"]);
  }

}
