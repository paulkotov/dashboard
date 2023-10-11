import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private apiUrl = `http://${Config.url}/news`;
  public apiUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.http.get('assets/json/users/getUser.json');
  }

  getUsers(): Observable<any> {
    return this.http.get('assets/json/users/getUsers.json').pipe(
      map((response: any) => response.data),
      catchError(err => {
          console.log(err);
          return throwError(err);
      }));
  }

  getUserById(id: string): Observable<any> {
    return this.http.get('assets/json/users/getUsers.json').pipe(
      map((response: any) => response.data.users.find(user => user.id === id)),
      catchError(err => {
          console.log(err);
          return throwError(err);
      }));
  }

  addUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  editUser(id: string | number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${id}`, data);
  }

  removeUser(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }

}
