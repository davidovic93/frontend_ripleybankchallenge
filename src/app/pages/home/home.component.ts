import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario :any;

  constructor(public _user: UserService) {
    this.usuario = this._user.usuario;
  }

  ngOnInit(): void {
  }

}
