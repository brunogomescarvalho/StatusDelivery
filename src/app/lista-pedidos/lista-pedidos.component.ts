import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPedido } from '../app.model';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent {

  @Input() public pedidos?: IPedido[];
  @Output() public onResetar = new EventEmitter();
  @Input() public contador?: number;

  public resetar(): void {
    this.onResetar.emit();
  }
}
