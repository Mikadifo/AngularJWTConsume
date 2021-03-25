import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlBase = 'http://localhost:9898';
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    console.log(localStorage.getItem('token'));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', localStorage.getItem('token') || '')
        .set('content-type', 'application/json'),
    };
    return this.http.get(`${this.urlBase}/listar-usuarios`, header);
  }

  iniciarSesion(username: string, contrasena: string): Observable<any> {
    return this.http.get(
      `${this.urlBase}/user?username=${username}&contrasena=${contrasena}`
    );
  }
}
