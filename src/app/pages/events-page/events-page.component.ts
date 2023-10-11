import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/EventsService/events.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  public events;
  public searchString = '';
  constructor(private eventsService: EventsService,
              private router: Router) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe((data: any) => {
      // console.log(data);
      this.events = data.events;
    });
  }

  addEvent() {
    this.router.navigate(['/event/new']);
  }

}
