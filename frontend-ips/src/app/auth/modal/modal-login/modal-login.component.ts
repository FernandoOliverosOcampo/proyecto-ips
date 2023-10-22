import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {
  loginDialogVisible = false;
  loginUsername = '';
  loginPassword = '';

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
}
