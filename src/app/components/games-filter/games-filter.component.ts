import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.css']
})
export class GamesFilterComponent implements OnInit {
  @Output()
  changed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectGame(data: {game: number}) {
    this.changed.emit(data.game);
  }
}
