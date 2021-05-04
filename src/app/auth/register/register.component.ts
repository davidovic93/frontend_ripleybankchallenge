import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario : Usuario = new Usuario();

  constructor(public router: Router, public _user: UserService) { }

  ngOnInit(): void {
  }


  register(forma: NgForm){
    if (forma.invalid) {
      return;
    }

    this

    this._user.crearUsuario(forma.value)
    .subscribe(resp => {
      this.router.navigate(['./login'])
    });
  }
}
