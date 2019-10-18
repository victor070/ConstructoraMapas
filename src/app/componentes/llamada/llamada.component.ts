import { Component, OnInit } from '@angular/core';
import {Mapa} from '../mapa';
import { MapaService} from '../mapa.service';
import Swal from "sweetalert2"; 
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styleUrls: ['./llamada.component.css']
})
export class LlamadaComponent implements OnInit {

  mapaList:Mapa[];

  constructor(public  mapaService: MapaService) { }

  ngOnInit() {
    this.mostrarMapas();
  }

  ir(){
    console.log("ir")
  }

  mostrarMapas(){
    this.mapaService.getMapa().snapshotChanges().subscribe(item=>{
      this.mapaList=[];
        item.forEach(element =>{
          let x = element.payload.toJSON();
          x["$keyRegistro"]=element.key;
            this.mapaList.push(x as Mapa);
    });
    });
  }
}
