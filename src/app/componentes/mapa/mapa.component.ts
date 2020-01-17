import { Component , OnInit,  ElementRef, NgZone  } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {Mapa} from '../mapa';
import { MapaService} from '../mapa.service';
import Swal from "sweetalert2"; 
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})



export class MapaComponent implements OnInit {

  title = 'Mapa';
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;
  

  mapaList: Mapa[];

  

  public searchElementRef: ElementRef;

  constructor( public  mapaService: MapaService){}
  
  ngOnInit() {
    this.setCurrentLocation();
  }
   



panico(mapaform: NgForm){
  console.log("LOS DATOS SE GUARDARON CORRECTAMENTE");
  
  this.mapaService.getMapa();

  if (mapaform.value.$keyRegistroMapa == null){
    this.mapaService.nuevoMapa(mapaform.value);
    console.log("Agregando informacion a la base de datos ");
    Swal.fire({
      position:'top-end',
      type:"success",
      title:'DATOS GUARDADOS',
      showConfirmButton: false,
      timer: 2500
    })
  }  
}



  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  
}

export class SidenavAutosizeExample {
  showFiller = false;
}
