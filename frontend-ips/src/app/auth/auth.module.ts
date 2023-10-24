// auth.module.ts
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ModalLoginComponent } from './modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from './modal/modal-register/modal-register.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

// Otras importaciones específicas de Auth

@NgModule({
  declarations: [
    LoginComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    // Otras declaraciones específicas de Auth
  ],
  imports: [
    // Agrega los módulos necesarios aquí
    DialogModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule
  ],
  exports: [
    LoginComponent, // Si necesitas exportar algún componente
  ],
})
export class AuthModule {}
