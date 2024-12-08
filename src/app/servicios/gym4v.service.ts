import { Injectable } from '@angular/core';
import { ListadoActividadesComponent } from '../listado-actividades/listado-actividades.component';
import { ActividadComponent } from '../actividad/actividad.component';

@Injectable({
  providedIn: 'root'
})
export class Gym4vService {

  constructor() { }

  datosActividades = [
    {
      "Fecha": "10/08/2014 00:00",
      "Lugar": "Aula02",
      "Monitor": "Miguel Goyena",
      "Tipo": "BodyPump"
    },
    {
      "Fecha": "12/09/2022 00:00",
      "Lugar": "Aula01",
      "Monitor": "Miguel Goyena",
      "Tipo": "Pilates"
    }
  ];

  result: String = "";

  obtenerDatosActividades() {
    return  this.datosActividades;
  }


}
