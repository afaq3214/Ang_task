import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersignupComponent } from './components/auth/usersignup/usersignup.component';
@Component({
  selector: 'app-root',
  imports: [ HeaderComponent,SignupComponent,UsersignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project';
}
