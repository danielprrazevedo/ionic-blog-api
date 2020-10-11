import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioFormComponent } from './usuario-form.component';
import { NgxMessageErrorModule } from 'ngx-message-error';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxMessageErrorModule,
  ],
  declarations: [UsuarioFormComponent],
  exports: [UsuarioFormComponent],
})
export class UsuarioFormComponentModule {}
