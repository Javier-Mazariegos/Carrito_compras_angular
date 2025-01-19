import { Component, inject } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { Carrito } from '../../../models/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pago',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {
  public carritoService = inject(CarritoService);
  
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.getListCarrito();
  }

  getListCarrito(){
    this.listCarrito = this.carritoService.getCarrito();
  }

}
