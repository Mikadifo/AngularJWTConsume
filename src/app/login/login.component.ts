import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    nombreCompleto: '',
    username: '',
    token: '',
  };
  constructor(private servicioUsuario: UsuarioService, private route: Router) {}

  ngOnInit(): void {}

  iniciarSesion(usuario: string, contrasena: string) {
    console.log(usuario, contrasena);

    this.servicioUsuario.iniciarSesion(usuario, contrasena).subscribe(
      (data) => {
        console.log(data);
        this.user.nombreCompleto = data.nombreCompleto;
        this.user.token = data.token;
        this.user.username = data.username;
        localStorage.setItem('token', data.token);
        this.route.navigate(['usuarios']);

        //this.userArray  = data.data;
      },
      (error) => console.log(error)
    );
  }
}
