import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { DashboardGlobalComponent } from './dashboards/dashboard-global/dashboard-global.component';
import { AplicacionesComponent } from './dashboards/aplicaciones/aplicaciones.component';
import { UsuariosComponent } from './dashboards/usuarios/usuarios.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardGlobalComponent },
      { path: 'aplicaciones', component: AplicacionesComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
    ]
  }
];
