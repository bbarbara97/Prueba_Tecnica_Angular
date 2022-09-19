import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../modles/pelicula.model';
import { PeliculaService } from '../services/pelicula.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  pelicula?: Array<any> = [];
  peli: any;
  peli2: any;
  peli3: any;
  peli4: any;

  currentPelicula: Pelicula = {};
  currentIndex = -1;
  name = '';

  constructor(
    private peliculaService: PeliculaService,
    private token: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.retrieveCPelicula();
  }
  retrieveCPelicula(): void {
    this.peliculaService.getAll().subscribe(
      (data:any) => {
        this.pelicula = data.results;
        console.log(data.results);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveCPelicula();
    this.currentPelicula = {};
    this.currentIndex = -1;
  }

  setActivatePelicula(pelicula: Pelicula, index: number): void {
    this.currentPelicula = pelicula;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentPelicula = {};
    this.currentIndex = -1;

    this.peliculaService.findByName(this.name).subscribe(
      (data) => {
        this.pelicula = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
