import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { IUser } from '@database/user';
import { ToastController } from '@ionic/angular';

import { omit } from 'lodash';
import { UserRequestService } from 'src/app/requests/user/user-request.service';

@Component({
  selector: 'blog-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent implements OnInit {
  public form: FormGroup;

  @Output() submitForm = new EventEmitter<Partial<IUser>>();

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private service: UserRequestService
  ) {}

  ngOnInit() {
    const equalTo = (control: AbstractControl): ValidationErrors | null => {
      if (!this.form) {
        return null;
      }
      const password = this.form.get('password');
      return password.value !== control.value ? { equalTo: true } : null;
    };

    const checkUsername = async (
      control: AbstractControl
    ): Promise<ValidationErrors | null> => {
      const result = await this.service
        .get(`username-exists/${control.value}`)
        .toPromise<any>();

      if (result.exists) {
        return {
          checkUsername: true,
        };
      }

      return null;
    };

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email], [checkUsername]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm: ['', [Validators.required, Validators.minLength(5), equalTo]],
    });
  }

  async submit() {
    if (!this.form.valid) {
      const toast = await this.toastCtrl.create({
        message: 'Formulário inválido',
        duration: 3000,
      });
      toast.present();
      return;
    }
    this.submitForm.emit(
      omit<IUser>(this.form.value, ['confirm'])
    );
  }
}
