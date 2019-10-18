import { Injectable } from '@angular/core';
import { Mapa} from './mapa';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class MapaService {

  selecMapa:Mapa =new Mapa();
  MapaList: AngularFireList<any>; 

  constructor(public firebase: AngularFireDatabase) { }


  getMapa(){
    return this.MapaList =this.firebase.list('mapa');
  }

  nuevoMapa(mapa: Mapa){
    this.MapaList.push({
    nombre: mapa.nombreM,
    direc: mapa.direc
     });
  
  }

  
}
