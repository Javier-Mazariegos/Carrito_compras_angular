import { Component, inject, input, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { CarritoService } from '../../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  id = input.required<string>();
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);
  producto!: Producto; 
  stars: string[] = [];
  cantidad: number = 1; 

  
  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){
    this.productoService.getProducto(this.id()).subscribe({
      next: (data) => {
        this.producto = data;
        this.generateStars(this.producto.rating.rate);
      }, error: (e) => {
        console.error(e);
      }
    })
  }

  generateStars(rating: number): void {
    const fullStars = Math.floor(rating); // Estrellas completas
    const halfStar = rating % 1 !== 0; // ¿Hay media estrella?
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Estrellas vacías

    // Estrellas completas (fas fa-star)
    this.stars = Array(fullStars).fill('fas fa-star');
    // Estrella media (fas fa-star-half-alt)
    if (halfStar) {
      this.stars.push('fas fa-star-half-alt');
    }
    // Estrellas vacías (far fa-star)
    this.stars = this.stars.concat(Array(emptyStars).fill('far fa-star'));
  }

  addCarrito() {
    if (this.cantidad > 0) {
      this.carritoService.addProducto(this.producto, this.cantidad);
    } else {
      console.warn('La cantidad debe ser mayor a 0.');
    }
  }

}
