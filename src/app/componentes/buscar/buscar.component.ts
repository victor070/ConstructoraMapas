import { Component, OnInit } from '@angular/core';
import { Caso } from "../caso-nuevo"
import { CasoNuevoService } from "../caso-nuevo.service";
import Swal from "sweetalert2";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  casoList:Caso[];
  buscar:string;  

  constructor(public casoNuevoService: CasoNuevoService) { }

  ngOnInit() {
    this.mostrarCasos();
  }


mostrarCasos(){
this.casoNuevoService.getCasoNuevo().snapshotChanges().subscribe(item=>{
  this.casoList=[];
    item.forEach(element =>{
      let x = element.payload.toJSON();
      x["$keyRegistro"]=element.key;
        this.casoList.push(x as Caso);
});
});
}

onEdit(caso: Caso){
this.casoNuevoService.selecCaso = caso;
this.casoNuevoService.getCasoNuevo();
}

buscarCaso(){
  console.log("buscando");
  this.casoNuevoService.getCasoNuevo().snapshotChanges().subscribe(item=>{
    this.casoList=[];
    item.forEach(element =>{
      let x = element.payload.toJSON();
      x["$keyRegistro"] = element.key;
      this.casoList.push(x as Caso);
    });

    this.casoList=this.casoList.filter(data=>{
      return data.num_identificacion.toString().trim()===this.buscar;
    })
    if (this.casoList.length ===0){
      this.mostrarCasos();
      Swal.fire({
        position:'top-end',
        type:"error",
        title:'El Caso no Existe',
        showConfirmButton: false,
        timer: 1500,
      })
    }else{ 
        Swal.fire({
        position:'top-end',
        type:"success",
        title:'dato Encontrado',
        showConfirmButton: false,
        timer: 1500,
      })
    }
    });

}

}
