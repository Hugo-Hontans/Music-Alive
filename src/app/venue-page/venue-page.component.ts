import { Component, OnInit, Input } from '@angular/core';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.css']
})
export class VenuePageComponent implements OnInit {
  @Input() objetTest;
  constructor() { }

  ngOnInit() {
    console.log(this.objetTest);
  }

}
