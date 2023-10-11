import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/EventsService/events.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  private id;
  public event: Event;
  public startDate: string;
  public finishDate: string;

  constructor(private eventsServise: EventsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
    this.id = params.id;
    });
  }

  ngOnInit() {
    if (this.id && this.id !== 'new') {
      this.eventsServise.getEventById(this.id).subscribe((event: any) => {
        this.event = event;
        this.startDate = event.dateStartBetting.split(' ')[0];
        this.finishDate = event.dateStopBetting.split(' ')[0];
      });
    } else {
      this.event = new Event();
    }
  }



}
