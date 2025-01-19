import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  imports: [RouterLink],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent {
  private productoService = inject(ProductoService);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.getlimitProductos();
  }

  getlimitProductos(){
    this.productoService.getlimitProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      }, error: (e) => {
        console.error(e);
      }
    })
  }
}
