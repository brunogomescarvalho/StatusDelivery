import { Component, Input } from '@angular/core';
import { IStatus } from '../app.model';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})

export class LinhaDoTempoComponent {
  @Input() public listaStatus?: IStatus[]; 
}
