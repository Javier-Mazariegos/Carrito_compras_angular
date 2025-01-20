import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { CarritoService } from '../../../services/carrito.service';
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-lista-productos',
  imports: [RouterLink],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => this.handleError(error, 'Error al cargar los productos.'),
    });
  }

  addProducto(item: Producto): void {
    try {
      this.carritoService.addProducto(item);
      toast.success('Producto agregado al carrito.');
    } catch (error) {
      toast.error('No se pudo agregar el producto al carrito.');
    }
  }

  private handleError(error: any, mensaje: string): void {
    if (error.status === 404) {
      toast.error('No se encontraron productos.');
    } else if (error.status === 500) {
      toast.error('Error del servidor. Por favor, inténtalo más tarde.');
    } else if (error.status === 0) {
      toast.error('Error de conexión. Verifica tu conexión a internet.');
    } else {
      toast.error(mensaje || 'Ocurrió un error inesperado.');
    }

  }
}
