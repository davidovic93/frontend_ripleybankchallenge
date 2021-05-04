import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinatarioService, UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-mis-destinaraios',
  templateUrl: './mis-destinaraios.component.html',
  styleUrls: ['./mis-destinaraios.component.css']
})
export class MisDestinaraiosComponent implements OnInit {
  cargando: boolean = true

  destinatarios: any = [];
  //   {
  //     destinatario_name: 'Jhon Doe',
  //     rut: '1111111-1',
  //     email: 'jhon.doe@dot.com',
  //     phone: '987654321',
  //     bank: 'Banco uno',
  //     type_account: 'Cuenta vista',
  //     number_account: '11223344556677'
  //   },
  //   {
  //     destinatario_name: 'Ripley',
  //     rut: '2222222-2',
  //     email: 'banco.ripley@dot.com',
  //     phone: '123456789',
  //     bank: 'Banco ripley',
  //     type_account: 'Cuenta corriente',
  //     number_account: '998877665544332211'
  //   }
  // ];


  constructor(public router: Router,private _user: UserService, private _destinatario: DestinatarioService) {
    this.buscar();
   }

  ngOnInit(): void {
  }

  buscar(){
    this.cargando = true;

    this._destinatario.cargarDestinatarios(this._user.uid).subscribe(
      (resp:any) => {
          this.cargando = false;
          this.destinatarios = resp || [];

      }, (err) => {
          this.cargando = false;
      }
    );

  }

  nuevoDestinatario(){
    this.router.navigate(['./home/nuevo-destinatario'])
  }
}
