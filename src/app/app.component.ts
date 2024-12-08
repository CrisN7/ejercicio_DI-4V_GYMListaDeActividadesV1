import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Gym4vService } from './servicios/gym4v.service';
import { ActividadComponent } from './actividad/actividad.component';
import { ListadoActividadesComponent } from './listado-actividades/listado-actividades.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ActividadComponent, ListadoActividadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'V1: 4V GYM Lista de Actividades';

  
}
