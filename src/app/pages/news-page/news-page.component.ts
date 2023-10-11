import { Component, OnInit, ViewChild } from '@angular/core';

import { GamesFilterComponent } from '../../components/games-filter/games-filter.component';
import { NewsService } from '../../services/NewsService/news.service';
// import { News } from '../../models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  @ViewChild(GamesFilterComponent, {static: false})
  private gameFilter: GamesFilterComponent;
  public news;

  constructor(private newsService: NewsService,
              private router: Router) {
  }

  ngOnInit() {
    this.getNews();
    //   console.log(data);
    // const hashtagList = this.news.map(news => news.hashtag.trim());
    // this.hashtags = [
      //   'all',
      //   ...Array.from(new Set(hashtagList))
      // ];
      // });
  }

  getNews() {
    this.newsService.getNews().subscribe(data => {
      this.news = data.news;
    });
  }

  addNews() {
    this.router.navigate(['/news/new']);
  }

  changeGameFilter(data) {
  }

}
