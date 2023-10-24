// components.module.ts
import { NgModule } from '@angular/core';
import { ControlRegisterComponent } from './home/control-register/control-register.component';
import { HomeComponent } from './home/home/home.component';
import { ReportsComponent } from './home/reports/reports.component';
import { ModalReminderComponent } from './modal/modal-reminder/modal-reminder.component';
import { ModalDeleteReminderComponent } from './modal/modal-delete-reminder/modal-delete-reminder.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

// Otras importaciones específicas de Components

@NgModule({
  declarations: [
    ControlRegisterComponent,
    HomeComponent,
    ReportsComponent,
    ModalReminderComponent,
    ModalDeleteReminderComponent,
    // Otras declaraciones específicas de Components
  ],
  imports: [
    DialogModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    CheckboxModule,
    CommonModule,
    FormsModule
    // Agrega los módulos necesarios aquí
  ],
  exports: [
    ControlRegisterComponent, // Si necesitas exportar algún componente
  ],
})
export class ComponentsModule {}
