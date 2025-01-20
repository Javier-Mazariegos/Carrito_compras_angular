import { Component, inject } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { Carrito } from '../../../models/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  imports: [CommonModule, FormsModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {
  public carritoService = inject(CarritoService);
  private router = inject(Router);
  
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.getListCarrito();
  }

  getListCarrito(){
    this.listCarrito = this.carritoService.getCarrito();
  }

  pagar() {
    this.carritoService.clearCarrito();
    this.router.navigate(['/confirmacion']); 
  } 

}
