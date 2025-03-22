import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Directive } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usersignup',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.css',
  standalone:true
})
export class UsersignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted!', this.signupForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }

}
