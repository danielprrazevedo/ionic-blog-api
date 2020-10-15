import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginRequestService } from 'src/app/requests/auth/login-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private service: LoginRequestService
  ) {}

  ngOnInit() {}

  login(event: any) {
    this.service.post(event).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.access_token);
        this.router.navigate(['/home']);
      },
      async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Atenção!',
          message: 'Falha ao realizar login',
          buttons: ['ok'],
        });
        if (err instanceof HttpErrorResponse && err.error.statusCode === 401) {
          alert.message = 'Login recusado. Verifique usuário e senha';
        }
        alert.present();
      }
    );
  }
}
