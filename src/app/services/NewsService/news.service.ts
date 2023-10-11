import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { News } from 'src/app/models/news';

// import { Config } from '../../config/config';
// import { News } from '../../models/news';

// const mockData = [{
//   image: 'assets/img/man-photo.png',
//   link: '/news/1',
//   title: '2018 World Championship Playoff brackets drawn',
//   date: '2019-02-14',
//   tag: '#csgo'
// }, {
//   image: 'assets/img/man-photo.png',
//   link: '/news/2',
//   title: 'Gambit 2019 open to transfer negotiations for AdreN',
//   date: '2019-02-14',
//   tag: '#csgo'
// }];

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // public news$: Observable<News[]>;
  // TODO remove url (only for proxy)
  public apiUrl = 'http://localhost:4200/api';
  // private apiUrl = `http://${Config.url}/news`;
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }),
    params: new HttpParams().set('withCredentials', 'true')
  };

  constructor(private http: HttpClient) { }

  getNews(): Observable<{news: News[]}> {
    return this.http.get('assets/json/news/getNews.json').pipe(
      map((response: any) => response.data),
      catchError(err => {
          console.log(err);
          return throwError(err);
      }));
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get('assets/json/news/getNews.json').pipe(
      map((response: any) => response.data.news.find(news => news.idNews === id)),
      catchError(err => {
          console.log(err);
          return throwError(err);
      })
    );
  }

  getNewsByHashtag(hashtag: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${hashtag}`);
  }

  addNews(data): Observable<any> {
    return new Observable((observer) => {});
  }

  saveNews(data) {
    return this.http.get('assets/json/news/postNews.json').pipe(
      map((response: any) => response),
      catchError(err => {
          console.log(err);
          return throwError(err);
      }));
  }
}
