import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.css']
})
export class VenuePageComponent implements OnInit {
  @Input()
  objetVenue;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(){
  }
}
