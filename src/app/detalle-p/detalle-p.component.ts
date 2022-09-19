import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-detalle-p',
  templateUrl: './detalle-p.component.html',
  styleUrls: ['./detalle-p.component.css']
})
export class DetallePComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private peliculaService: PeliculaService) { }

  articulos:any = null;

  ngOnInit(): void {
    let idPelicula = this.activatedRoute.snapshot.paramMap.get("id");
    this.peliculaService.returnInfo(idPelicula).subscribe( result => this.articulos = result)
  }

}
