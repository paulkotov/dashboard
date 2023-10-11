import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-panel',
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.css']
})
export class TeamPanelComponent implements OnInit {
  @Input()
  public data: Team;

  constructor(private router: Router) { }

  ngOnInit() {}

  openForm() {
    this.router.navigate(['/team/1']);
  }

}
