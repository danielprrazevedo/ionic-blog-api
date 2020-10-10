import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioFormComponent } from './usuario-form.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [UsuarioFormComponent],
  exports: [UsuarioFormComponent]
})
export class UsuarioFormComponentModule {}
