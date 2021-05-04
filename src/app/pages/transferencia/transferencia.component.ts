import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { DestinatarioService, TransferenciaService, UserService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  transferencia: Transferencia = new Transferencia();
  destinatarios : any = [];
  valor:string = '';

  constructor(public router: Router, public _user: UserService, public _transferencia: TransferenciaService,public _destinatario: DestinatarioService) { }

  ngOnInit(): void {

    this.cargarDestinatarios();
  }

   //funciones y/o métodos
   realizarTransferencia(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    this.transferencia.amount = forma.value.amount;

    this._transferencia.crearTransferencia(this.transferencia,this._user.uid,this.valor)
    .subscribe(resp => {
      this.router.navigate(['./home/historial-transferencia'])
    });
  }

  cargarDestinatarios(){

    this._destinatario.cargarDestinatarios(this._user.uid).subscribe(
      (resp:any) => {

          this.destinatarios = resp || [];

          if(this.destinatarios.length == 0){
            Swal.fire({
              title: 'No tienes destinatarios!',
              text: 'Puedes ir a la sección "mis destinatarios" y crearte uno nuevo',
              icon: 'warning'
            });
          }
      }, (err) => {

      }
    );

  }


  cambiaDestinatario() {

    if(this.valor.length > 0){
      let obj = this.destinatarios.filter( (res:any) => res.uid === this.valor);
      this.transferencia.destinatario_name = obj[0].destinatario_name;
      this.transferencia.email = obj[0].email;
      this.transferencia.bank = obj[0].bank;
      this.transferencia.type_account = obj[0].type_account;
      this.transferencia.rut = obj[0].rut;
    } else{
      this.transferencia.destinatario_name = '';
      this.transferencia.email = '';
      this.transferencia.bank = '';
      this.transferencia.type_account = '';
      this.transferencia.rut = '';
    }

  }
}
