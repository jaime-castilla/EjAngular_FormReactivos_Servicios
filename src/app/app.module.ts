import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjPruebaFormReactivoComponent } from './ej-prueba-form-reactivo/ej-prueba-form-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ej1FormReactivosComponent } from './ej1-form-reactivos/ej1-form-reactivos.component';
import { EjPruebaServiciosComponent } from './ej-prueba-servicios/ej-prueba-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    EjPruebaFormReactivoComponent,
    Ej1FormReactivosComponent,
    EjPruebaServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
