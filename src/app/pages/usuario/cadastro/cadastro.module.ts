import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { UsuarioFormComponentModule } from 'src/app/components/usuario-form/usuario-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    UsuarioFormComponentModule,
  ],
  declarations: [CadastroPage],
})
export class CadastroPageModule {}
