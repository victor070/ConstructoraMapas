import { Component } from '@angular/core';
import { Caso } from "../caso-nuevo"
import { CasoNuevoService } from "../caso-nuevo.service";
import Swal from "sweetalert2"; 
import { NgForm } from '@angular/forms';
import {  AngularFireStorageModule } from "@angular/fire/storage";

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


constructor(public casoNuevoService: CasoNuevoService, public Storage: AngularFireStorageModule ){
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
      type:"success",
      title:'Modificado con exito!',
      showConfirmButton:true,
      timer: 1500
    })
  }  
  
 }

 onUpload( e ){
   console.log('subir', e.target.files[0]);
   const id = Math.random().toString(36).substring(2);
   const file = e.target.files[0];
   const filePath ='upload/imagen.png'; 
      
 }

}
