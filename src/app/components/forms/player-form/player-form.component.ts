import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/PlayersService/players.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  private id;
  public player;
  public teams = ['Nemiga', 'Alert'];

  get getStatus() {
    return this.player.status === 'not active' ? false : true;
  }

  constructor(private playersService: PlayersService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.getPlayer();
    this.getTeams();
  }

  getPlayer() {
    this.playersService.getPlayerById(this.id).subscribe(data => this.player = data);
    console.log(this.player);
  }

  getTeams() {
    console.log('get teams');
  }

  saveUser() {
    this.router.navigate(['/players']);
  }

  cancel() {
    this.router.navigate(['/players']);
  }

}
