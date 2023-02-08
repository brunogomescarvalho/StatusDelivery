import { Component, Input, OnInit } from '@angular/core';
import { Status } from './app.enumStatus';
import { IStatus } from './app.model';
import { IPedido } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'status-delivery';

  public finalizado?: boolean;
  @Input() public status?: IStatus;
  @Input() public contador?: number;

  public pedidos: IPedido[] = [];

  ngOnInit(): void {
    const listaPedidos = localStorage.getItem('pedido');
    if (listaPedidos) {
      this.pedidos = JSON.parse(listaPedidos);
      this.contador = this.pedidos.length;
    }
  }
  public pedidoFinalizado = (event: Event): void => {
    let selecionado = event.target as HTMLSelectElement;
    let numeroStatus = Number(selecionado.value);

    if (numeroStatus != Status.Entregue) {
      this.finalizado = false
    } else {
      this.finalizado = true;
    }

  }

  public mostrarNrPedido(): void {
    const pedido: IPedido = {
      numero: this.pedidos.length! + 1,
      data: new Date().toLocaleString()
    };

    this.pedidos.push(pedido);
    const pedidosString = JSON.stringify(this.pedidos);
    window.localStorage.setItem('pedido', pedidosString);
    window.location.reload();
  }

  public resetarHistorico() {
    localStorage.clear();
    window.location.reload();
  }

  public pedidoAberto() {
    window.alert('Pedido Aberto');
  }

}
