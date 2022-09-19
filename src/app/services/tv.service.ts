import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tv } from '../modles/tv.model';

const baseURL = 'https://api.themoviedb.org/3/tv/'

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tv[]>{
    return this.http.get<Tv[]>(baseURL + "popular?api_key=b59b0e6913ca038dceebc9bcdfa12193&language=en-US&page=1");
  }
  get(id: any): Observable<Tv> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseURL}/${id}`);
  }

  findByName(name: any) {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=b59b0e6913ca038dceebc9bcdfa12193&query=" + name);
  }

  returnInfo(id:any){
    return this.http.get("https://api.themoviedb.org/3/tv/"+ id + "?api_key=b59b0e6913ca038dceebc9bcdfa12193");
  }

}
