import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "password" | "email"

@Component({
    selector: 'app-primary-input',
    standalone:true,
    imports: [
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PrimaryInputComponent),
            multi: true
        }
    ],
    templateUrl: './primary-input.component.html',
    styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent implements ControlValueAccessor {
  @Input() type:InputTypes = "text";
  @Input() inputName:string = "";
  @Input() placeHolder:string = "";
  @Input() label:string = "";

  value:string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  OnInput(event:Event) {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  } 

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {}
  

}
