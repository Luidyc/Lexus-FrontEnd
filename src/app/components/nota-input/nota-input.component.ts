import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nota-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nota-input.component.html',
  styleUrl: './nota-input.component.scss'
})
export class NotaInputComponent {
    @Input() primaryBtnText:string ="";
    @Input() secundaryBtnText:string = "";
    @Output("manual") onManual = new EventEmitter();
    @Output("import") onImport = new EventEmitter();
    show: boolean = false;

    toggle() {
      this.show = !this.show;
    }
  
    manual() {
      this.onManual.emit();
      this.show = !this.show;
    }
  
    import() {
      this.onImport.emit();
    }
}
