import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IVAN JULIAN GUERRA CORDOBA';
  correo = 'ivanj.guerrac@unilibrebog.edu.co';
  planetas: any = [
    { activo: true, nombre: 'Colombia', },
    { activo: true, nombre: 'Brasil', },
    { activo: true, nombre: 'Argentina', },
    { activo: false, nombre: 'Polonia', },
    { activo: false, nombre: 'Alemania', },
    { activo: true, nombre: 'Francia', }
  ]
}
