import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Proyectos } from './components/proyectos/proyectos';
import { Experiencia } from './components/experiencia/experiencia';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'proyectos', component: Proyectos },
  { path: 'experiencia', component: Experiencia },
  { path: '**', redirectTo: '' } // Si alguien escribe una ruta mal, lo manda al inicio
];