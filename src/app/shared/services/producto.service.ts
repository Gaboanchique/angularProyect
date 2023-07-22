import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get<Producto[]>('https://fakestoreapi.com/products');
  }

  crearProducto(paramProducto: Producto) {
    return this.http.post('https://fakestoreapi.com/products', paramProducto);
  }
}
