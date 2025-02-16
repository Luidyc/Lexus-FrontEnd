import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
    selector: 'app-default-login-layout',
    standalone:true,
    imports:[],
    template:`
    `,
    templateUrl: './default-login-layout.component.html',
    styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent{


  @Input() title:string = "";
  @Input() subtitle:string = "";
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
