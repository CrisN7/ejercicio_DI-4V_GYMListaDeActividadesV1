import { Component } from '@angular/core';
import { Gym4vService } from '../servicios/gym4v.service';
import { ActividadComponent } from '../actividad/actividad.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listado-actividades',
  imports: [ActividadComponent, CommonModule],
  templateUrl: './listado-actividades.component.html',
  styleUrl: './listado-actividades.component.scss'
})

export class ListadoActividadesComponent {
  datosServicio;
  constructor(private miServicio: Gym4vService){
    this.datosServicio = miServicio.obtenerDatosActividades();
  }
}
