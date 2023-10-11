import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-panel',
  templateUrl: './event-panel.component.html',
  styleUrls: ['./event-panel.component.css']
})
export class EventPanelComponent implements OnInit {
  @Input()
  public data;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.data);
  }

  openForm() {
    this.router.navigate([`/event/${this.data.idEvent}`]);
  }
}
