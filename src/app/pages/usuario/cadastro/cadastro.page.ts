import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@database/user';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'blog-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private route: Router
  ) {}

  ngOnInit() {}

  async submitForm(user: Partial<IUser>) {
    const result = await this.http
      .post<IUser>('http://localhost:3000/user', user)
      .toPromise<IUser>();

    const toast = await this.toastCtrl.create({
      message: 'Usuário criado com sucesso',
    });

    toast.present();

    this.route.navigate(['/login']);
  }
}
