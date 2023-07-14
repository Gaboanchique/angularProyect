import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-calculadora',
  templateUrl: './ejercicio-calculadora.component.html',
  styleUrls: ['./ejercicio-calculadora.component.css']
})
export class EjercicioCalculadoraComponent implements OnInit {
  valorCalculadora = "";
  resultadoCalculadora = 0;
  constructor() { }

  ngOnInit(): void {
  }

  escribirNumero(numero:string) {
    this.valorCalculadora += numero;
  }

  realizaroperacion (operacion:string) {
    switch(operacion){
      case '+':
        break;
      case '-':
        break;
      case 'x':
        break;
      case '/':
        break;
    }
  }
}
