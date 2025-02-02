import { Injectable } from '@angular/core';
import { Carrito } from '../models/carrito';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private listCarrito: Carrito[] = [];
  
  getCarrito(){
    this.getSession();
    return this.listCarrito;
  }

  addProducto(producto: Producto, cantidad: number = 1){
    this.getSession();
    const index = this.listCarrito.findIndex(item => item.producto.id == producto.id)
    if(index == -1){
      const item = new Carrito(producto, cantidad);
      this.listCarrito.push(item);
    }
    else{
      this.updateCarrito(index, this.listCarrito[index].cantidad + cantidad)
    }
    this.saveSession();
  }

  deleteProduct(index: number){
    if(index >= 0 && index < this.listCarrito.length){
      this.listCarrito.splice(index,1);
      this.saveSession();
    }
  }

  updateCarrito(index: number, cantidad: number){
    if(index >= 0 && index < this.listCarrito.length){
      this.listCarrito[index].cantidad = cantidad;
      this.saveSession();
    }
  }

  getCantidad(){
    this.getSession();
    
    return this.listCarrito.reduce((total, item) => total + item.cantidad, 0);
  }

  getTotal(){
    const total = this.listCarrito.reduce((sum, item) => 
      sum += item.producto.price * item.cantidad, 0
    );
    return total;
  }

  clearCarrito() {
    this.listCarrito = []; 
    localStorage.removeItem('carrito'); 
  }

  saveSession(){
    localStorage.setItem('carrito', JSON.stringify(this.listCarrito));
  }

  getSession(){
    this.listCarrito = []
    if(typeof window != 'undefined' && window.localStorage){
      const carrito = localStorage.getItem('carrito');
      if(carrito != null){
        this.listCarrito = JSON.parse(carrito);
      }
    }
  }

}
