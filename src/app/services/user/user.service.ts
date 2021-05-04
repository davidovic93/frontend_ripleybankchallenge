import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { login } from 'src/app/interfaces/login.interface';
import { Usuario } from 'src/app/models/user.model';
import { register } from 'src/app/interfaces/register.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private http: HttpClient,
    private ngZone: NgZone ) {


   }

   guardarLocalStorage( token: string) {

    localStorage.setItem('token', token );
  }

  login(data : login){
    return this.http.post(base_url+ '/login', data)
      .pipe(
        map((resp: any) => {
          this.guardarLocalStorage( resp.token);
          this.usuario = resp.usuario;
          Swal.fire({
            title: `Bienvenido ${this.usuario.firstname}!`,
            text: '',
            icon: 'success'
          });
          return true;
        }),
        catchError(err => {
          Swal.fire({
            title: 'Credenciales incorrectas!',
            text: err.error.mensaje,
            icon: 'error'
          });
          return throwError(err.message);
        }));
  }

  logout() {
    localStorage.removeItem('token');
    this.usuario = new Usuario();

      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })

  }

  validarToken(): Observable<boolean> {

    return this.http.get(`${ base_url }/login/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
        this.usuario = resp.usuario;
        this.guardarLocalStorage( resp.token);

        return true;
      }),
      catchError( error => of(false) )
    );

  }

  //get values
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid():string {
    return this.usuario.uid || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  crearUsuario( data : register) {

    const url = `${ base_url }/user`;
    return this.http.post( url, data)
    .pipe(
      map( (resp : any) => {
        Swal.fire({
          title: 'Usuario creado!',
          text: 'Entra ahora con tu rut y contraseña',
          icon: 'success'
        });

        return true;
      }),
      catchError(err => {
        Swal.fire({
          title: 'No se pudo crear usuario!',
          text: err.error.mensaje,
          icon: 'error'
        });
        return throwError(err.message);
      }));
  }
}
