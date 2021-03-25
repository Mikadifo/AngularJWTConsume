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
}
