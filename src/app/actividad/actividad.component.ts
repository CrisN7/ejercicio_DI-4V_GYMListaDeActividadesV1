import { Component, input } from '@angular/core';

@Component({
  selector: 'app-actividad',
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent {

  fechaActividad = input("null");
  lugarActividad = input("null");
  monitorActividad = input("null");
  tipoActividad = input("null");

}
