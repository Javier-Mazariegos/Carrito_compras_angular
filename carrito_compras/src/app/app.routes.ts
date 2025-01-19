import { Routes } from '@angular/router';
import { ListaProductosComponent } from './components/productos/lista-productos/lista-productos.component';
import { ResumenComponent } from './components/carrito/resumen/resumen.component';

export const routes: Routes = [
    {path: '', component: ListaProductosComponent},
    {path: 'carrito', component: ResumenComponent},
    {path: '**', pathMatch: 'full' , redirectTo: ''} //Si el usuario ingresa una ruta incorrecta, se redirige al componente principal
];
