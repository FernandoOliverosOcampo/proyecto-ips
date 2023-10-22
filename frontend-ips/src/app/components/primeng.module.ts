import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule} from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [
    DialogModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule
  ],
  exports: [
    DialogModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule
  ]
})
export class PrimeNgModule { }
