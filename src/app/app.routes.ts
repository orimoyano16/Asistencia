import { Routes } from '@angular/router';
import { Home } from './Componentes/Pages/home/home';
import { Navbar } from './Componentes/Shared/navbar/navbar';
import { Footer } from './Componentes/Shared/footer/footer';

export const routes: Routes = [
  { path: 'Home', component: Home },
  { path: 'navbar', component: Navbar },
  { path: 'footer', component: Footer},
  
];
