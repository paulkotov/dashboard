import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hashtag-list',
  templateUrl: './hashtag-list.component.html',
  styleUrls: ['./hashtag-list.component.css']
})
export class HashtagListComponent implements OnInit {
  @Input()
  hashtags: string[];

  @Output()
  selectedHashtag = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectHashtag(hashtag){
    this.selectedHashtag.emit(hashtag);
  }
  

}
