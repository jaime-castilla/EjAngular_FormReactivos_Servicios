import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ej1-form-reactivos',
  templateUrl: './ej1-form-reactivos.component.html',
  styleUrls: ['./ej1-form-reactivos.component.css']
})
export class Ej1FormReactivosComponent {

  viviendas = new FormGroup(
    {
      referencia: new FormControl(''),
      direccion: new FormControl(''),
      descripcion: new FormControl(''),
      urlImagen: new FormControl(''),
      numHabitaciones: new FormControl(''),
      numBanios: new FormControl('')
    }
  )

  onSubmit(): void{

    console.log(this.viviendas.value)
  }

}
