import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// const mockData = [{
//   name: 'DOTA2 WINTER MADNESS',
//   team1: 'Nemiga',
//   team2: 'Gambit',
//   game: 'csgo',
//   date: '2010-10-01',
//   time: '',
//   status: 'active'
// }, {
//   name: 'DOTA2 WINTER MADNESS',
//   team1: 'Nemiga',
//   team2: 'Gambit',
//   game: 'warcraft 2',
//   date: '2010-10-01',
//   time: '',
//   status: 'non active'
// }];

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public apiUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    // return of(mockData);
    // return this.http.get(this.apiUrl);
    return this.http.get('assets/json/events/getEvents.json').pipe(
      map((response: any) => response.data),
      catchError(err => {
          console.log(err);
          return throwError(err);
      })
    );
  }

  getEventById(id: string | number): Observable<Event> {
    // return of(mockData[0]);
    // return this.http.get(`${this.apiUrl}/id`);
    return this.http.get('assets/json/events/getEvents.json').pipe(
      map((response: any) => response.data.events.find(event => event.idEvent === id)),
      catchError(err => {
          console.log(err);
          return throwError(err);
      })
    );
  }

  addEvent(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  editEvent(id: string | number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/event/${id}`, data);
  }

  removeEvent(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/event/${id}`);
  }
}
