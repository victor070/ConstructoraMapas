import { Component, OnInit } from '@angular/core';
import { Caso } from "../caso-nuevo"
import { CasoNuevoService } from "../caso-nuevo.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css']
})
export class ImprimirComponent implements OnInit {

  casoList:Caso[];

  constructor(public casoNuevoService: CasoNuevoService) { }

  ngOnInit() {
    
  }
  onPrint(caso: Caso){
    this.casoNuevoService.selecCaso = caso;
    this.casoNuevoService.getCasoNuevo();
    }


  impCasos(){
    this.casoNuevoService.getCasoNuevo().snapshotChanges().subscribe(item=>{
      this.casoList=[];
        item.forEach(element =>{
          let x = element.payload.toJSON();
          x["$keyRegistro"]=element.key;
            this.casoList.push(x as Caso);
    });
    });
    }
}
