import {FormsModule} from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { Carrito } from '../../../models/carrito';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resumen',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit {
  public carritoService = inject(CarritoService);

  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.getListCarrito();
  }

  getListCarrito(){
    this.listCarrito = this.carritoService.getCarrito();
    console.log(this.listCarrito)
  }

  deleteProduct(index: number){
    this.carritoService.deleteProduct(index);
    this.getListCarrito();
  }

  onKeyDown(event: any){
    event.preventDefault();
  }

  updateCantidad(item: Carrito, index: number){
    this.carritoService.updateCarrito(index, item.cantidad);
  }

  updateQuantity(index: number, change: number): void {
    const item = this.listCarrito[index];
    let newQuantity = item.cantidad + change;

    if (newQuantity >= 1) { // Verifica que la cantidad mínima sea 1
        item.cantidad = newQuantity;
        this.carritoService.updateCarrito(index, newQuantity); // Actualiza el carrito en el servicio
    }
}

}
