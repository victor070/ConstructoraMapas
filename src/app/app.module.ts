import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import {environment} from '../environments/environment';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule}from'@angular/fire/database/';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MaterialModule } from './materialModule';

import { BuscarComponent } from './componentes/buscar/buscar.component';
import { CasoNuevoComponent } from './componentes/caso-nuevo/caso-nuevo.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { LlamadaComponent } from './componentes/llamada/llamada.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuscarComponent,
    CasoNuevoComponent,
    MapaComponent,
    LlamadaComponent,
    
  
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MaterialModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqU3bfeVAqCAfeoaDShL0pbnOSSo62XxU'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
