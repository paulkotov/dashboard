import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const mockData = [{
  id: '01-11',
  name: 'petya monstr',
  players: 3,
  status: 'active'
}, {
  id: '01-11',
  name: 'petya monstr',
  players: 5,
  status: 'not active'
}];

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  public apiUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    // return of(mockData);
    // return this.http.get(this.apiUrl);
    return this.http.get('assets/json/teams/getTeams.json').pipe(
      map((response: any) => response.data),
      catchError(err => {
          console.log(err);
          return throwError(err);
      })
    );
  }

  getTeamById(id: string | number) {
    return of(mockData[0]);
    // return this.http.get(`${this.apiUrl}/id`);
  }

  addTeams(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  editTeam(id: string | number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/team/${id}`, data);
  }

  removeTeam(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/team/${id}`);
  }

}
