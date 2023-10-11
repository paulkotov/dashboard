import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../../models/news';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input()
  news: News[];
  public numberOfNewsDisplayedInPage: number = 12;

  constructor() { }

  ngOnInit() {
  }
  
  updateNewsDisplayedInPage(event){

  }

}
