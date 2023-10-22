import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent {
  registerDialogVisible = false;
  user = '';
  email_address = '';
  password = '';
  name = '';
  last_name = '';
  id_patient = ''
  phone_number = '';

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
