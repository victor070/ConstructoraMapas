import { Injectable } from '@angular/core';
import {Caso}from './caso-nuevo';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class CasoNuevoService {

  selecCaso:Caso = new Caso();
  CasoNuevoList: AngularFireList<any>;

 
  
  constructor(public firebase: AngularFireDatabase) { }


  getCasoNuevo(){
    return this.CasoNuevoList = this.firebase.list('Casos');
  }

  

  insertCasoNuevo(casonuevo :  Caso){
    
  this.CasoNuevoList.push({
    num_identificacion: casonuevo.num_identificacion,
    tipoCaso: casonuevo.tipoCaso,
    nombreV: casonuevo.nombreV,
    apellidoV: casonuevo.apellidoV,
    edadV: casonuevo.edadV,
    generoV: casonuevo.generoV,
    idiomaV: casonuevo.idiomaV,
    estadoCivilV: casonuevo.estadoCivilV,
    telefonoV: casonuevo.telefonoV,
    celularV:  casonuevo.celularV,
    ocupacionV: casonuevo.ocupacionV,
    escolaridadV: casonuevo.escolaridadV,
    domicilioV: casonuevo.domicilioV,
    lTrabajoV: casonuevo.lTrabajoV,

    nombreC: casonuevo.nombreC,
    apellidoC: casonuevo.apellidoC,
    edadC: casonuevo.edadC,
    generoC: casonuevo.generoC,
    idiomaC: casonuevo.idiomaC,
    estadoCivilC: casonuevo.estadoCivilC,
    telefonoC: casonuevo.telefonoC,
    celularC:  casonuevo.celularC,
    ocupacionC: casonuevo.ocupacionC,
    escolaridadC: casonuevo.escolaridadC,
    domicilioC: casonuevo.domicilioC,
    lTrabajoC: casonuevo.lTrabajoC,

    
    descripcion: casonuevo.descripcion,
    diagnostico: casonuevo.diagnostico,
    acciones: casonuevo.acciones,
    estatus: casonuevo.estatus


                          });
}

actualizar(casonuevo : Caso){
this.CasoNuevoList.update(casonuevo.$keyRegistro,{
    
        
    descripcion: casonuevo.descripcion,
    diagnostico: casonuevo.diagnostico,
    acciones: casonuevo.acciones,
    estatus: casonuevo.estatus,
    ob:casonuevo.ob

    
});
}


}
