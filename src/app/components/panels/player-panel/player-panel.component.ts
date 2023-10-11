import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css']
})
export class PlayerPanelComponent implements OnInit {
  @Input()
  public data;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.data);
  }

  openForm(id) {
    // console.log(id);
    this.router.navigate([`/player/${id}`]);
  }
}
