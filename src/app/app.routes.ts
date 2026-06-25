import { Routes } from '@angular/router';
import { Home } from './Componentes/Pages/home/home';
import { Blog } from './Componentes/Pages/blog/blog';
import { Galeria } from './Componentes/Pages/galeria/galeria';
import { Navbar } from './Componentes/Shared/navbar/navbar';
import { Footer } from './Componentes/Shared/footer/footer';
import { Contactos } from './Componentes/Pages/contactos/contactos';
import { Servicios } from './Componentes/Pages/servicios/servicios';
/**
 * ¿Como agregar un recurso nuevo (una nueva page)?
 * 
 * Seguir el ejemplo de contactos; se define un nuevo path como esta abajo,
 * luego en el navbar se agrega el routerLink que especificamos aca abajo "/contactos" o si
 * implementamos un "dashboard" agregar al html del navbar al boton correspondiente
 * 'routerLink="/dashboard"'
 */

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'navbar', component: Navbar },
  { path: 'footer', component: Footer},
  { path: 'contactos', component: Contactos},
  { path: 'servicios',component: Servicios},
  { path: 'galeria', component: Galeria },
  { path: 'blog', component: Blog},
  { path: '', redirectTo: 'home', pathMatch:'full'}, // 1
  { path: '**', redirectTo: 'home', pathMatch:'full'} // 2
];

/**
 * 1. Si el recurso de la URL esta vacia (asistencia.com) por defecto redireccionamos a home
 * (asistencia.com/home)
 * 
 * 2. Si el recurso de la URL es invalida (asistencia.com/dashboard) por defecto redireccionamos
 * a home (asistencia.com/home)
 */