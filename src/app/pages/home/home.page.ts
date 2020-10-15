import { Component, OnInit } from '@angular/core';
import { IUser } from '@database/user';
import { Observable } from 'rxjs';
import { UserRequestService } from 'src/app/requests/user/user-request.service';

@Component({
  selector: 'blog-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userList$: Observable<IUser[]>;

  constructor(private userRequest: UserRequestService) {}

  ngOnInit() {
    this.userList$ = this.userRequest.get();
  }
}
