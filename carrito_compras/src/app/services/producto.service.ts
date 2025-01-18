import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);
  private url: string = 'https://fakestoreapi.com/products?limit=5'

  getProductos(){
    return this.http.get<Producto[]>(this.url);
  }
}
