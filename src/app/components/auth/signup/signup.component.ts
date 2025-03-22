import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,  ReactiveFormsModule,MatFormFieldModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true
})
export class SignupComponent {
  isStudent: boolean = true;
  selectedCertificationFile: string | null = null;
  selectedResumeFile: string | null = null;
  selectedVideoFile: string | null = null;

  

  toggleRole(student: boolean) {
    this.isStudent = student;
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.myForm = this.fb.group({
      timeZone: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      video: [null, Validators.required],
      resume: [null, Validators.required],  
      certification: [null],
    }, { validators: this.passwordMatchValidator });  
  }

  
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword.value
      ? { mismatch: true }
      : null;
  }

  onFileSelected(event: any, controlName: string) {
    console.log(`Received controlName: ${controlName}`); 
  
    const file = event.target.files[0];
  
    if (file) {
      console.log(`File selected for ${controlName}:`, file.name);
  
      this.myForm.patchValue({ [controlName]: file });
      this.myForm.get(controlName)?.updateValueAndValidity();
  
      
      if (controlName === 'certification') {
        this.selectedCertificationFile = file.name;
      } else if (controlName === 'resume') {
        this.selectedResumeFile = file.name;
      } else if (controlName === 'video') {
        this.selectedVideoFile = file.name;
      }
  
      console.log("Certification File:", this.selectedCertificationFile);
      console.log("Resume File:", this.selectedResumeFile);
      console.log("Video File:", this.selectedVideoFile);
    } else {
      console.log(`No file selected for ${controlName}`);
    }
  }
  
  
  
  


  onSubmit() {
    console.log("clicked")
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  

}

