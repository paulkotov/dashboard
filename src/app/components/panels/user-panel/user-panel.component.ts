import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  @Input()
  public data;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openForm() {
    this.router.navigate([`/user/${this.data.id}`]);
  }
}
