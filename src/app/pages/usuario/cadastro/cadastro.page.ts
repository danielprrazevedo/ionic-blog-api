import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@database/user';
import { ToastController } from '@ionic/angular';
import { UserRequestService } from 'src/app/requests/user/user-request.service';

@Component({
  selector: 'blog-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  constructor(
    private toastCtrl: ToastController,
    private route: Router,
    private service: UserRequestService
  ) {}

  ngOnInit() {}

  async submitForm(user: Partial<IUser>) {
    await this.service.post(user).toPromise();

    const toast = await this.toastCtrl.create({
      message: 'Usuário criado com sucesso',
    });

    toast.present();

    this.route.navigate(['/login']);
  }
}
