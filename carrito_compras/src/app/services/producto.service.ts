import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);
  private url: string = environment.API_URL;

  getProductos(){
    return this.http.get<Producto[]>(`${this.url}/products`);
  }

  getlimitProductos(){
    return this.http.get<Producto[]>(`${this.url}/products?limit=4`);
  }

  getProducto(id: string){
    return this.http.get<Producto>(`${this.url}/products/${id}`);
  }

}
