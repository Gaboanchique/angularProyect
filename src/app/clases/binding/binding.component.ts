import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  unaImagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ara_Macao_%28Yarinacocha%2C_Pucallpa%29.jpg/250px-Ara_Macao_%28Yarinacocha%2C_Pucallpa%29.jpg";
  unaVariablePropearty = true;
  constructor() { }

  ngOnInit(): void {
  }

  retornamensaje () {
    return "un mensaje de interpolacion";
  }

}
