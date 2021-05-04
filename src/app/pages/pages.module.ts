import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';
import { MisDestinaraiosComponent } from './mis-destinaraios/mis-destinaraios.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { HistorialTransferenciaComponent } from './historial-transferencia/historial-transferencia.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    HomeComponent,
    NuevoDestinatarioComponent,
    MisDestinaraiosComponent,
    TransferenciaComponent,
    HistorialTransferenciaComponent,
    PagesComponent
  ],
  exports: [
    HomeComponent,
    NuevoDestinatarioComponent,
    MisDestinaraiosComponent,
    TransferenciaComponent,
    HistorialTransferenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
