import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `http://${Config.url}/news`;
  constructor(private http: HttpClient) { }

  loginUser(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('withCredentials', 'true')
    };
    // return this.http.post(this.apiUrl, JSON.stringify(data));
    // TODO remove
    return of(JSON.stringify(data));
  }

  logoutUser() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
