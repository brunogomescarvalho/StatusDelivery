import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StatusComponent } from './status/status.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    LinhaDoTempoComponent,
    ContadorComponent,
    ListaPedidosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
