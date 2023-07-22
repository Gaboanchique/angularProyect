import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.models';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
producto : Producto = new Producto();
  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.producto)
  }
}
