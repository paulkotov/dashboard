import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/TeamsService/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public teams;
  constructor(private teamsService: TeamsService,
              private router: Router) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams().subscribe((data: any) => {
      console.log(data);
      this.teams = data.teams;
    });
  }

  addTeam() {
    this.router.navigate(['/team/new']);
  }
}
