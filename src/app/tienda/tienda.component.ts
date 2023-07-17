import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  ruta ="inicio";

  constructor() { }

  ngOnInit(): void {
  }

  escogerPaginax(rutaDersdeHijo:string){
    console.log("aca");
    this.ruta = rutaDersdeHijo;
  }

}