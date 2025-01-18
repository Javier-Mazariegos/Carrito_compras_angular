import { Routes } from '@angular/router';
import { ListaProductosComponent } from './components/productos/lista-productos/lista-productos.component';

export const routes: Routes = [
    {path: '', component: ListaProductosComponent},
    {path: '**', pathMatch: 'full' , redirectTo: ''} //Si el usuario ingresa una ruta incorrecta, se redirige al componente principal
];
