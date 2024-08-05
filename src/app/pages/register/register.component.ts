import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('YOOO', this.initialForm.value);
  }
}
