<<<<<<< Updated upstream
import { SongkickService } from './../services/songkick.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
=======
import { Component, OnInit, Input } from '@angular/core';

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
