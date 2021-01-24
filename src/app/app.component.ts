import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines= [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99
      }]
      this.peliculasProximosEstrenos= [{
        titulo: 'Matrix 4',
        fechaLanzamiento: new Date(),
        precio: 1230.99
      },
      {
        titulo: 'Mandorian',
        fechaLanzamiento: new Date('2021-11-14'),
        precio: 300.99
      },
      {
        titulo: 'Avenger 9',
        fechaLanzamiento: new Date('2021-11-14'),
        precio: 670.99
      }]      
    }, 500);
  }


  title = 'Listado de Peliculas';
  peliculasEnCines;
  peliculasProximosEstrenos;

}
