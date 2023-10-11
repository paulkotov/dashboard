import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/PlayersService/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  public players;
  public searchString = '';

  constructor(private playersService: PlayersService,
              private router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playersService.getPlayers().subscribe(({ data }) => {
      this.players = data.players;
    });
  }

  addPlayer() {
    this.router.navigate(['/player/new']);
  }

}
