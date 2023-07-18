import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() seleccionarPagina = new EventEmitter();
  menu = [
    {
      nombre: 'inicio', ruta: "inicio", active: true},
    { nombre: 'Catalogo', ruta: "catalogo" },
    { nombre: 'Nosotros', ruta: "nosotros" },
    { nombre: 'Contactanos', ruta: "contactanos" }
  ];
  constructor() {}

  ngOnInit(): void {}

  // cambiarPagina(paramRuta: string) {
  //  this.seleccionarPagina.emit(paramRuta);
  // }
}
