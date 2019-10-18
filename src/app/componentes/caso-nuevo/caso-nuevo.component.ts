import { Component } from '@angular/core';
import { Caso } from "../caso-nuevo"
import { CasoNuevoService } from "../caso-nuevo.service";
import Swal from "sweetalert2"; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caso-nuevo',
  templateUrl: './caso-nuevo.component.html',
  styleUrls: ['./caso-nuevo.component.css']
})
export class CasoNuevoComponent  {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  casoList:Caso[];


constructor(public casoNuevoService: CasoNuevoService ){
 }

 onSumit(nuevo: NgForm ){
  
  this.casoNuevoService.getCasoNuevo();

  if (nuevo.value.$keyRegistro == null){
    this.casoNuevoService.insertCasoNuevo(nuevo.value);
    console.log("Agregando informacion a la base de datos ");
    Swal.fire({
      position:'top-end',
      type:"success",
      title:'Creado con exito!',
      showConfirmButton: false,
      timer: 1500
    })
  } else { 
    this.casoNuevoService.actualizar(nuevo.value);
    console.log("Actulizando");
       Swal.fire({
      position:'top-end',
      type:"error",
      title:'Modificado con exito!',
      showConfirmButton:true,
      timer: 1500
    })
  }  
  
 }

}
