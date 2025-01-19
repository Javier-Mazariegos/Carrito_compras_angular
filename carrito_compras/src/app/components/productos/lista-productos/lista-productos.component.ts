import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-lista-productos',
  imports: [],
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

  getProductos(){
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      }, error: (e) => {
        console.error(e);
      }
    })
  }

  addProducto(item: Producto){
    this.carritoService.addProducto(item);
  }
}
