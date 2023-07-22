import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './clases/componentes/componentes.component';
import { BindingComponent } from './clases/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { EjercicioCalculadoraComponent } from './clases/componentes/ejercicio-calculadora/ejercicio-calculadora.component';
import { DirectivesComponent } from './clases/directives/directives.component';
import { ClasesComponent } from './clases/clases.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NavbarComponent } from './tienda/navbar/navbar.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';
import { NosotrosComponent } from './tienda/nosotros/nosotros.component';
import { FooterComponent } from './tienda/footer/footer.component';
import { AppRoutingModule } from './app-routing';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './tienda/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    BindingComponent,
    EjercicioCalculadoraComponent,
    DirectivesComponent,
    ClasesComponent,
    TiendaComponent,
    NavbarComponent,
    InicioComponent,
    CatalogoComponent,
    ContactanosComponent,
    NosotrosComponent,
    FooterComponent,
    NoEncontradoComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
