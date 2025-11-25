import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  // Página inicial → login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login SEM AuthGuard
  { path: 'login', component: LoginComponent },

  // Páginas protegidas
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // Rota desconhecida
  { path: '**', redirectTo: 'login' }
];
