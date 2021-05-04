import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { UserService } from '../user/user.service';
import { destinatario } from 'src/app/interfaces/destinatario.interface';

const base_url = environment.base_url;
const bank_url = environment.bank_url;

@Injectable({
  providedIn: 'root'
})

export class DestinatarioService {

  constructor(private http:HttpClient) { }

  getBanks(){
    return this.http.get(bank_url);
  }

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

  cargarDestinatarios(id:any) {

    const url = `${ base_url }/destinatario/${id}`;
    console.log(url);
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: any) => resp.destinatarios)
              );
  }

  crearDestinatario( data : destinatario ,id:string) {

    data.usuario = id;
    const url = `${ base_url }/destinatario`;
    console.log(this.headers,url,data)
    return this.http.post( url, data, this.headers );
  }

}
