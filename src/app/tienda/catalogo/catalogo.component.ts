import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.models';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      (data)=>{ // sirve para capturar rta en caso de ser exitoso
        this.productos = data;
      },
      (error)=>{
        alert(error);
      },
      ()=>{},
    )
  }

}
