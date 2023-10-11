import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  text: string;
  title: string;
}

@Component({
  selector: 'app-news-card-dialog',
  templateUrl: './news-card-dialog.component.html',
  styleUrls: ['./news-card-dialog.component.css'],
  providers: []
})
export class NewsCardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewsCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
