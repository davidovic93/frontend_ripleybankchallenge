import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Destinatario } from 'src/app/models/destinatario.model';
import { DestinatarioService, UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.css']
})
export class NuevoDestinatarioComponent implements OnInit {

  destinatario: Destinatario = new Destinatario();

  banks : any = [];

  constructor(public router: Router, public _destinatario: DestinatarioService,public _user: UserService) { }

  ngOnInit(): void {
    this.cargarBancos();
  }

  //funciones y/o métodos
  crearDestinatario(forma: NgForm) {
    if (forma.invalid) {
      return;
    }

    this

    this._destinatario.crearDestinatario(forma.value,this._user.uid)
    .subscribe(resp => {
      this.router.navigate(['./home/mis-destinatarios'])
    });

  }

  cargarBancos(){
    this._destinatario.getBanks().subscribe((resp: any) => this.banks = resp.banks);
  }

}
