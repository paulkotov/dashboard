import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewsCardDialogComponent } from '../news-card-dialog/news-card-dialog.component';
import { News } from '../../../models/news';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input()
  news: News;

  @Input()
  index: number;

  constructor(public dialog: MatDialog) {}

  openDialog(): any {
    const dialogRef = this.dialog.open(NewsCardDialogComponent, {
      width: '800px',
      data: {
        title: this.news.title,
        text: this.news.description
      }
    });
    return dialogRef;
  }

  ngOnInit() {
  }

}
