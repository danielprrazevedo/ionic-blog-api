import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  login(event: any) {
    this.http.post('http://localhost:3000/auth/login', event).subscribe(
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
