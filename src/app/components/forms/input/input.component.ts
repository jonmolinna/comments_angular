import {
  Component,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { InputType } from './input.interface';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent implements InputType, OnInit {
  @Input('type') type: string = 'text';
  @Input('placeholder') placeholder: string = '';
  @Input('controlName') controlName: string = '';

  @Output() formControlChange = new EventEmitter<FormControl>();
  formControl!: FormControl;

  ngOnInit(): void {
    this.initializeFormControl();
    this.subscribeToValueChange();
  }

  initializeFormControl(): void {
    this.formControl = new FormControl('');
  }

  subscribeToValueChange(): void {
    this.formControl.valueChanges.subscribe((value) => {
      this.formControlChange.emit(this.formControl);
    });
  }
}
