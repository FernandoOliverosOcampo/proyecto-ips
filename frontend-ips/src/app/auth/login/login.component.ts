import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDialogVisible = false;
  loginUsername = '';
  loginPassword = '';

  registerDialogVisible = false;
  newUsername = '';
  email = '';
  newPassword = '';

  showLoginDialog() {
    this.loginDialogVisible = true;
  }

  closeLoginDialog() {
    this.loginDialogVisible = false;
  }

  login() {
    // Aquí puedes agregar la lógica para iniciar sesión
    this.loginDialogVisible = false;
  }

  showRegisterDialog() {
    this.registerDialogVisible = true;
  }

  closeRegisterDialog() {
    this.registerDialogVisible = false;
  }

  register() {
    // Aquí puedes agregar la lógica para registrar al usuario
    this.registerDialogVisible = false;
  }
}