import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://api.themoviedb.org/3/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private http: HttpClient) {}

user: any = null;

  // login(username: string, password: string): Observable<any> {
  //  this.user = null;

  //  this.user = {
  //   "username": username,
  //   "password": password
  //  };
  //  return this.http.post(AUTH_API + 'login', JSON.stringify(this.user),{ headers: { 'Content-Type': 'application/json'}});
  // }

  newToken(): Observable<any>{
    return this.http.get(AUTH_API + "authentication/token/new?api_key=b59b0e6913ca038dceebc9bcdfa12193");
  }

  login(): Observable<any>{
    return this.http.get(AUTH_API + "authenticate/" + this.newToken());
  }
}
