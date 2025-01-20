import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';


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
    this.getLimitProductos();
  }

  getLimitProductos(): void {
    this.productoService.getlimitProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => this.handleError(error),
    });
  }

  private handleError(error: any): void {
    if (error.status === 404) {
      toast.error('No se encontraron productos.');
    } else if (error.status === 500) {
      toast.error('Error del servidor. Por favor, inténtalo más tarde.');
    } else if (error.status === 0) {
      toast.error('Error de conexión. Verifica tu conexión a internet.');
    } else {
      toast.error('Ocurrió un error inesperado.');
    }

  }
}
