import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputComponent } from '../../components/forms/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  initialForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  handleFormControl(formControlName: string, formControl: FormControl) {
    this.initialForm.setControl(formControlName, formControl);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('YOOO', this.initialForm.value);
  }
}
