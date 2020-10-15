import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequest } from 'src/app/core/request';

@Injectable({
  providedIn: 'root',
})
export class LoginRequestService extends BaseRequest<any> {
  protected path = 'auth/login';

  constructor(protected http: HttpClient) {
    super();
  }
}
