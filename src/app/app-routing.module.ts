import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasoNuevoComponent } from './componentes/caso-nuevo/caso-nuevo.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { LlamadaComponent } from './componentes/llamada/llamada.component';

const routes: Routes =[
    {path:'caso-nuevo', component:CasoNuevoComponent},
    {path:'buscar', component: BuscarComponent},
    {path:'mapa',component: MapaComponent},
    {path:'emergencia', component: LlamadaComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
