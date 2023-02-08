import { Component, EventEmitter, Output } from '@angular/core';
import { IStatus } from '../app.model';
import { Status } from '../app.enumStatus';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  public pedidoRecebido: IStatus = { numero: Status.Recebido, descricao: 'Pedido Recebido', ativo: false };
  public pedidoEmPreparacao: IStatus = { numero: Status.EmPreparacao, descricao: 'Pedido Em Preparação', ativo: false };
  public pedidoPronto: IStatus = { numero: Status.Pronto, descricao: 'Pedido Pronto', ativo: false };
  public pedidoEntregue: IStatus = { numero: Status.Entregue, descricao: 'Pedido Entregue', ativo: false };

  public listaStatus: IStatus[] = [this.pedidoRecebido, this.pedidoEmPreparacao, this.pedidoPronto, this.pedidoEntregue];

  @Output() public onSelecionar = new EventEmitter();

  public selecionar(event: Event): void {
    let selecionado = event.target as HTMLSelectElement;
    let numeroStatus = Number(selecionado.value);

    for (let status of this.listaStatus) {
      status.ativo = false;

      if (status.numero == numeroStatus) {
        status.ativo = true;
        this.onSelecionar.emit(event);

      }
    }
  }
}
