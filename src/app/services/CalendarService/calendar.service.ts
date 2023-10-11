import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private apiUrl = `http://${Config.url}/news`;

  constructor(private http: HttpClient) { }

  getCalendarEvents(): Observable<any> {
    // this.http.get();
    return new Observable();
  }
}
