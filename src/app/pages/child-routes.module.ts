import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialTransferenciaComponent } from './historial-transferencia/historial-transferencia.component';
import { HomeComponent } from './home/home.component';
import { MisDestinaraiosComponent } from './mis-destinaraios/mis-destinaraios.component';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';



const childRoutes: Routes = [
  { path: '', component: HomeComponent, data: { titulo: 'Inicio' } },
  {path: 'home', component: HomeComponent , data: { titulo: 'Inicio'}},
  {path: 'mis-destinatarios', component: MisDestinaraiosComponent, data: { titulo: 'Mis destinatarios'}},
  {path: 'nuevo-destinatario', component: NuevoDestinatarioComponent, data: { titulo: 'Nuevo destinatario'}},
  {path: 'transferencia', component: TransferenciaComponent, data: { titulo: 'Realizar transferencia'}},
  {path: 'historial-transferencia', component: HistorialTransferenciaComponent, data: { titulo: 'Historial de transferencias'}},
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
