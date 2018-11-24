import { SongkickService } from './../services/songkick.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-venue-result',
  templateUrl: './venue-result.component.html',
  styleUrls: ['./venue-result.component.css']
})
export class VenueResultComponent implements OnInit {
  venueResult;
  objetVenue;
  affichage = false;

  constructor(
    private songkickservice: SongkickService,
    private route: ActivatedRoute
  ) {}

  searchVenue() {
    this.songkickservice
    .searchVenue(this.venueResult)
    .subscribe((res: any) => {
      this.objetVenue = res;
      this.affichage = true;
    });
  }


  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
    this.venueResult = params['id'];
    this.searchVenue();
    });
  }

}
