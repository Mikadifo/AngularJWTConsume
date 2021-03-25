import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './list-users/listado-usuarios/listado-usuarios.component';
import { LoginComponent } from './login/login.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [AppComponent, ListadoUsuariosComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
