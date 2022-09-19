import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../modles/pelicula.model';

const baseURL = 'https://api.themoviedb.org/3/movie/'

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(baseURL + "popular?api_key=b59b0e6913ca038dceebc9bcdfa12193&language=en-US&page=1");
  }
  get(id: any): Observable<Pelicula> {
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

  findByName(name: any): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${baseURL}?original_title=${name}?api_key=b59b0e6913ca038dceebc9bcdfa12193`);
  }

  returnInfo(id:any){
    return this.http.get("https://api.themoviedb.org/3/movie/"+ id + "?api_key=b59b0e6913ca038dceebc9bcdfa12193");
  }

}
