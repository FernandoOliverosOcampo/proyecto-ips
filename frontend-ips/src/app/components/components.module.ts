import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../auth/login/login.component';
import { ModalLoginComponent } from '../auth/modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from '../auth/modal/modal-register/modal-register.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ControlRegisterComponent } from './home/control-register/control-register.component';
import { HomeComponent } from './home/home/home.component';
import { ReportsComponent } from './home/reports/reports.component';
import { ModalDeleteReminderComponent } from './modal/modal-delete-reminder/modal-delete-reminder.component';
import { ModalReminderComponent } from './modal/modal-reminder/modal-reminder.component';
import { ModalReportsComponent } from './modal/modal-reports/modal-reports.component';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ControlRegisterComponent,
    ReportsComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    NavbarComponent,
    ModalReminderComponent,
    ModalReportsComponent,
    ModalDeleteReminderComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class ComponentsModule { }
