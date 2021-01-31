import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {

      this.peliculasEnCines= [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }]
      this.peliculasProximosEstrenos= [{
        titulo: 'Matrix 4',
        fechaLanzamiento: new Date(),
        precio: 1230.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2I5NzlmMWYtYjIwYy00Y2ZiLWI0ODgtYjAxNDZiZGJlMjlhXkEyXkFqcGdeQXVyMzk1MDQ2MQ@@._V1_UY268_CR110,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Mandorian',
        fechaLanzamiento: new Date('2021-11-14'),
        precio: 300.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Avenger 9',
        fechaLanzamiento: new Date('2021-11-14'),
        precio: 670.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }]      

  }


  title = 'Listado de Peliculas';
  ocultar = false;
  peliculasEnCines;
  peliculasProximosEstrenos;

}
