import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input()
  oneEvent;

  constructor() {}

  ngOnInit() {
    console.log(this.oneEvent);
  }
}
//venue.metroArea.id
