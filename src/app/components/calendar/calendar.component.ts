import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public headers = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  constructor() { }

  ngOnInit() {
  }

}
