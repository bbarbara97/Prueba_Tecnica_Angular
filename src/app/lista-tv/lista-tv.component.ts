import { Component, OnInit } from '@angular/core';
import { Tv } from '../modles/tv.model';
import { TvService } from '../services/tv.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-lista-tv',
  templateUrl: './lista-tv.component.html',
  styleUrls: ['./lista-tv.component.css']
})
export class ListaTvComponent implements OnInit {

  tvs?:Tv[];
  currentTv: Tv = {};
  currentIndex = -1;
  name = '';

  tv: any;
  tv2: any;
  tv3: any;
  tv4: any;

  constructor(private TvService: TvService,private token: TokenStorageService){  }

  ngOnInit(): void{
    this.retrieveTv();
    }

    retrieveTv(): void {
      this.TvService.getAll()
      .subscribe(
        (data: any) => {
          this.tv = data.results;
          console.log(data.results);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    refreshList(): void {
      this.retrieveTv();
      this.currentTv = {};
      this.currentIndex = -1;
    }

    setActivateCharacter(tv: Tv, index: number): void {
      this.currentTv = tv;
      this.currentIndex = index;
    }

    searchName(): void {
      this.currentTv = {};
      this.currentIndex = -1;
      console.log("name: "+this.name);


      this.TvService.findByName(this.name.replace(' ', '+'))
      .subscribe(
        data => {
          this.tv = data;
          console.log("data: "+data);
        },
        error => {
          console.log(error);
        }
      );
    }

}
