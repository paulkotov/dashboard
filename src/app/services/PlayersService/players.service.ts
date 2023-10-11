import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

const mockData = [{
  id: '01-11',
  name: 'petya monstr',
  team: 'Nemiga',
  status: 'active'
}, {
  id: '01-12',
  name: 'petya monstr',
  team: 'Alert',
  status: 'not active'
}];

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  public apiUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    // return of(mockData);
    // return this.http.get(this.apiUrl);
    return this.http.get('assets/json/players/getPlayers.json');
  }

  getPlayerById(id: string | number): Observable<any> {
    return of(mockData[0]);
    // return this.http.get(`this.apiUrl/${id}`);
  }

  addPlayer(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  editPlayer(id: string | number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/player/${id}`, data);
  }

  removePlayer(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/player/${id}`);
  }
}
