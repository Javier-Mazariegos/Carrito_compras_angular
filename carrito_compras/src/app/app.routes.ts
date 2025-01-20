import { Routes } from '@angular/router';
import { ListaProductosComponent } from './components/productos/lista-productos/lista-productos.component';
import { ResumenComponent } from './components/carrito/resumen/resumen.component';
import { DetalleComponent } from './components/detalle-producto/detalle/detalle.component';
import { PagoComponent } from './components/proceso-pago/pago/pago.component';
import { NotificacionComponent } from './components/confirmacion/notificacion/notificacion.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { authGuard } from './guards/auth.guard';
import { authenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [
    {path: '', component: ListaProductosComponent, canActivate: [authGuard]},
    {path: 'carrito', component: ResumenComponent, canActivate: [authGuard]},
    {path: 'detalle-producto/:id', component: DetalleComponent, canActivate: [authGuard]},
    {path: 'proceso-pago', component: PagoComponent, canActivate: [authGuard]},
    {path: 'confirmacion', component: NotificacionComponent,canActivate: [authGuard]},
    {path: 'login', component: LoginComponent, canActivate: [authenticatedGuard]},
    {path: '**', pathMatch: 'full' , redirectTo: ''} 
];
