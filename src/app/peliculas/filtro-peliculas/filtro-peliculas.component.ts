import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css'],
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Acción' },
    { id: 3, nombre: 'Comedia' },
  ];

  peliculas = [
    {
      titulo: 'Spider-Man: Far From Home',
      enCines: false,
      proximosEstrenos: true,
      generos: [1, 2],
      poster:
        'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      titulo: 'Moana',
      enCines: true,
      proximosEstrenos: false,
      generos: [3],
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      titulo: 'Inception',
      enCines: false,
      proximosEstrenos: false,
      generos: [1, 3],
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
  ];

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false,
    });
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
