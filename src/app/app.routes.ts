import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TransporteComponent } from './pages/transporte/transporte.component';
import { NotasComponent } from './pages/notas/notas.component';
import { ConferenciaComponent } from './pages/conferencia/conferencia.component';
import { AuthGuard } from './services/auth/authguard/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent,
    },
    {
        path:"transporte",
        component:TransporteComponent,
        canActivate:[AuthGuard],
    },
    {
        path:"notas",
        component:NotasComponent,
        canActivate:[AuthGuard],
    },
    {
        path:"conferencia",
        component:ConferenciaComponent,
        canActivate:[AuthGuard],
    },
    {
        path:"home",
        component:HomeComponent,
        canActivate:[AuthGuard],
    }
];
