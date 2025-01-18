import { AfterContentInit, Component, ContentChild, EventEmitter, Input, input, Output } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent{

  @Input() title:string = "";
  @Input() primaryBtnText:string ="";
  @Input() secundaryBtnText:string = "";
  @Input() divider:string ="";
  @Input() disablePrimaryBtn:boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();


  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }

}
