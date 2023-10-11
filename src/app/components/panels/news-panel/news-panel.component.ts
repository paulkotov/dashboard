import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.css']
})
export class NewsPanelComponent implements OnInit {
  @Input()
  public data: News;

  constructor(private router: Router) { }

  ngOnInit() {}

  get getDate() {
    return this.data.dateTimeCreate.split(' ')[0];
  }

  openForm() {
    this.router.navigate([`/news/${this.data.idNews}`]);
  }

}
