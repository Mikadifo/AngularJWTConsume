import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
})
export class ListadoUsuariosComponent implements OnInit {
  listadoUsuarios: User[] = [];
  selectedUser: User = {
    userId: 0,
    nombreCompleto: '',
    token: '',
    username: '',
    contrasena: '',
  };

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.getUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.listadoUsuarios = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {}

  select(user: User) {
    this.selectedUser = user;
  }

  new() {
    this.selectedUser = new User();
  }

  save() {
    if (this.selectedUser.userId == 0) {
      this.usuarioService.saveUser(this.selectedUser).subscribe((data) => {
        this.usuarioService.getUsuarios().subscribe(
          (data) => {
            console.log(data);
            this.listadoUsuarios = data;
          },
          (error) => console.log(error)
        );
      });
    } else {
      console.log('edit');
      this.usuarioService
        .editUser(this.selectedUser.userId, this.selectedUser)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => console.log(error)
        );
    }
  }
}
