import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() seleccionarPagina = new EventEmitter();
  menu : Menu[]  = [
    {
      nombre: 'inicio', ruta: "inicio", desactivado: true},
    { nombre: 'Catalogo', ruta: "catalogo", desactivado: true },
    { nombre: 'Nosotros', ruta: "nosotros", desactivado: true },
    { nombre: 'Contactanos', ruta: "contactanos", desactivado: true }
  ];
  constructor() {}

  ngOnInit(): void {}

  // cambiarPagina(paramRuta: string) {
  //  this.seleccionarPagina.emit(paramRuta);
  // }
}
