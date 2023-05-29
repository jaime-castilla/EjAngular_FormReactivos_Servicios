import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjPruebaServiciosService {

  mostrarMensaje(mensaje: string): void{

    alert(mensaje)
  }

  constructor() { }
}
