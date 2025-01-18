import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TransporteComponent } from './pages/transporte/transporte.component';
import { NotasComponent } from './pages/notas/notas.component';
import { ConferenciaComponent } from './pages/conferencia/conferencia.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent,
    },
    {
        path:"transporte",
        component:TransporteComponent,
    },
    {
        path:"notas",
        component:NotasComponent,
    },
    {
        path:"conferencia",
        component:ConferenciaComponent,
    }
];
