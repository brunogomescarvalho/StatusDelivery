import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  contador: number = 0;
  @Output() public onContar: EventEmitter<number> = new EventEmitter<number>();

  public contar(): void {
    {
      this.onContar.emit();
    }

  }
}
