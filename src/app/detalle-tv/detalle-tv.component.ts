import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-detalle-tv',
  templateUrl: './detalle-tv.component.html',
  styleUrls: ['./detalle-tv.component.css']
})
export class DetalleTVComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private tvService: TvService) { }

  articulos:any = null;

  ngOnInit(): void {
    let idTv = this.activatedRoute.snapshot.paramMap.get("id");
    this.tvService.returnInfo(idTv).subscribe( result => this.articulos = result)
  }

}
