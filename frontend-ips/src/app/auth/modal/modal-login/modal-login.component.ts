import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export interface LoginResponse {
  acceso: boolean;
  id_paciente?: string;
  tipo_usuario?: string;
}

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
  providers: [MessageService]
})

export class ModalLoginComponent {

  loginDialogVisible = false;
  loginUsername = '';
  loginPassword = '';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  login(): void {
    // Validar las entradas del usuario
    if (!this.loginUsername || !this.loginPassword) {
      this.messageService.add({severity:'error', summary:'Error', detail:'Usuario y contraseña son requeridos'});
      return;
    }

    this.authService.login(this.loginUsername, this.loginPassword).subscribe({
      next: (data: LoginResponse) => {
        console.log(data);
        if (data.acceso === true) {
          if (data.tipo_usuario === 'paciente') {
            this.router.navigate(['/home']);
          } 
        } else {
          this.messageService.add({severity:'error', summary:'Error', detail:'Usuario o contraseña incorrectos'});
        }
      },
      error: err => {
        // Manejar el error
        console.log(err);
        this.messageService.add({severity:'error', summary:'Error', detail:'Error al iniciar sesión'});
      }
    });
  }

  showLoginDialog() {
    this.loginDialogVisible = true;
    
  }

  closeLoginDialog() {
    this.loginDialogVisible = false;
  }

}
