import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaGestionLibrosComponent} from './rutas/ruta-gestion-libros/ruta-gestion-libros.component';
import {RutaBuscarLibroComponent} from './rutas/ruta-buscar-libro/ruta-buscar-libro.component';
import {RutaEditarLibroComponent} from './rutas/ruta-editar-libro/ruta-editar-libro.component';
import {RutaCrearLibroComponent} from './rutas/ruta-crear-libro/ruta-crear-libro.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'inicio/gestion-usuarios',
    component: RutaGestionUsuariosComponent
  },
  {
    path: 'inicio/gestion-usuarios/:idUsuario/gestion-libros',
    component: RutaGestionLibrosComponent,
    children: [
      {
        path: 'buscar',
        component: RutaBuscarLibroComponent
      },
      {
        path: 'editar/:idLibro',
        component: RutaEditarLibroComponent
      },
      {
        path: 'crear',
        component: RutaCrearLibroComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
