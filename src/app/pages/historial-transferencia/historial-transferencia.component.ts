import { Component, OnInit } from '@angular/core';
import { TransferenciaService, UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-historial-transferencia',
  templateUrl: './historial-transferencia.component.html',
  styleUrls: ['./historial-transferencia.component.css']
})
export class HistorialTransferenciaComponent implements OnInit {

  cargando: boolean = true

  transferencias: any = [];
  //   {
  //     destinatario_name: 'Jhon Doe',
  //     rut: '1111111-1',
  //     bank: 'Banco uno',
  //     type_account: 'Cuenta vista',
  //     amount: '100500'
  //   },
  //   {
  //     destinatario_name: 'Ripley',
  //     rut: '2222222-2',
  //     bank: 'Banco ripley',
  //     type_account: 'Cuenta corriente',
  //     amount: '10300'
  //   }
  // ];


  constructor(private _transferencia: TransferenciaService,private _user: UserService) {
    this.buscar();
   }

  ngOnInit(): void {
  }

  buscar(){
    this.cargando = true;

    this._transferencia.cargarTransferencias(this._user.uid).subscribe(
      (resp:any) => {
          this.cargando = false;
          this.transferencias = resp || [];

      }, (err) => {
          this.cargando = false;
      }
    );

  }
}
