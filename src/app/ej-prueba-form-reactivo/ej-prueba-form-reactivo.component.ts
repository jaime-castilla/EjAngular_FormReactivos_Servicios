import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-ej-prueba-form-reactivo',
  templateUrl: './ej-prueba-form-reactivo.component.html',
  styleUrls: ['./ej-prueba-form-reactivo.component.css']
})
export class EjPruebaFormReactivoComponent {

  formularioPrueba = new FormGroup(
    {
      numeroPedido: new FormControl(''),
      cliente: new FormControl('')
    }
  )

  onSubmit(){

    //Para sacar por consola el formulario entero
    console.log(this.formularioPrueba.value)
    //Para sacar por consola solo un control del formulario, en este caso "numeroPedido"
    let valor = this.formularioPrueba.get('numeroPedido')!.value
    console.log(valor)
    
  }

}
