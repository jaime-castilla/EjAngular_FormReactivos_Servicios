import { Component } from '@angular/core';
import { EjPruebaServiciosService } from '../ej-prueba-servicios.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ej-prueba-servicios',
  templateUrl: './ej-prueba-servicios.component.html',
  styleUrls: ['./ej-prueba-servicios.component.css']
})
export class EjPruebaServiciosComponent {

  mensaje = new FormGroup(
    {
      bienvenida: new FormControl('')
    }
  )

  constructor(private servicio: EjPruebaServiciosService){}

  agregarElemento(){

    //Llamo al método de la clase con el objeto servicio y le pido que saque el valor de bienvenida. (Las ! es como decirle que no se preocupe que no va a ser nulo y va a tener un valor si o si).
    this.servicio.mostrarMensaje(this.mensaje.get('bienvenida')!.value!);
    
    
  }

}
