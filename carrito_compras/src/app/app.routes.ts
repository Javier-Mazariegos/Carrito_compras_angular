import { Routes } from '@angular/router';
import { ListaProductosComponent } from './components/productos/lista-productos/lista-productos.component';
import { ResumenComponent } from './components/carrito/resumen/resumen.component';
import { DetalleComponent } from './components/detalle-producto/detalle/detalle.component';
import { PagoComponent } from './components/proceso-pago/pago/pago.component';
import { NotificacionComponent } from './components/confirmacion/notificacion/notificacion.component';

export const routes: Routes = [
    {path: '', component: ListaProductosComponent},
    {path: 'carrito', component: ResumenComponent},
    {path: 'detalle-producto/:id', component: DetalleComponent},
    {path: 'proceso-pago', component: PagoComponent},
    {path: 'confirmacion', component: NotificacionComponent},
    {path: '**', pathMatch: 'full' , redirectTo: ''} //Si el usuario ingresa una ruta incorrecta, se redirige al componente principal
];
