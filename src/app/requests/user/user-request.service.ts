import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@database/user';
import { BaseRequest } from 'src/app/core/request';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService extends BaseRequest<IUser> {
  protected path = 'user';

  constructor(protected http: HttpClient) {
    super();
  }
}
