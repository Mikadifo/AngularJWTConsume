import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

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

  editUser(id: number, user: User): Observable<any> {
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', localStorage.getItem('token') || '')
        .set('content-type', 'application/json'),
    };
    return this.http.put(`${this.urlBase}/edit/${id}`, user, header);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(`${this.urlBase}/save`, user);
  }
}
