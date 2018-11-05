import { Component, OnInit, Input } from '@angular/core';
import { FindIndexService } from '../services/find-index.service';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})

export class EventItemComponent implements OnInit {
  @Input()
  oneEvent;
  @Input() index;

  constructor(private findindexservice : FindIndexService) {}


  indexOfEvents(){
    this.findindexservice.index = this.index;
    this.findindexservice.doCheckCarteMap = true;
    this.findindexservice.scrollBoolean = true;
  }

  ngOnInit() {
  }
}
