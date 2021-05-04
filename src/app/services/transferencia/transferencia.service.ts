import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { transferencia } from 'src/app/interfaces/transferencia.interface';
import { Transferencia } from 'src/app/models/transferencia.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }


  cargarTransferencias(id:any) {

    const url = `${ base_url }/transferencia/${id}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: any) => {
                  console.log(resp);
                  var element:any= [];
                  for (const key in resp.transferencias) {
                    if (Object.prototype.hasOwnProperty.call(resp.transferencias, key)) {
                      element[key] = {
                        destinatario_name: resp.transferencias[key].destinatario.destinatario_name,
                        ...resp.transferencias[key]
                      }

                    }
                  }
                  console.log('transferencias',element);
                    return element
                })
              );
  }

  crearTransferencia( data : Transferencia ,id:string,destinatario:string) {

    data.usuario = id;
    data.destinatario = destinatario;
    const url = `${ base_url }/transferencia`;
    return this.http.post( url, data, this.headers )
    .pipe(
      map( (resp : any) => {
        Swal.fire({
          title: 'Transferencia realizada!',
          text: '',
          icon: 'success'
        });

        return true;
      }),
      catchError(err => {
        Swal.fire({
          title: 'No se pudo realizar la transferencia!',
          text: err.error.mensaje,
          icon: 'error'
        });
        return throwError(err.message);
      }));
  }
}
