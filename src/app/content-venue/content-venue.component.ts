import { SongkickService } from './../services/songkick.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-content-venue',
  templateUrl: './content-venue.component.html',
  styleUrls: ['./content-venue.component.css']
})
export class ContentVenueComponent implements OnInit {
  venueResult;
  objetVenue;
  objetEventsOfVenue;
  affichage = false;
  affichage2 = false;

  constructor(
    private songkickservice: SongkickService,
    private route: ActivatedRoute
  ) {}

  searchVenueDetails() {
    this.songkickservice
      .searchVenueDetails(this.venueResult)
      .subscribe((res: any) => {
        this.objetVenue = res;
        this.affichage = true;
        // console.log(this.objetVenue);
      });
  }

  searchEventsOfVenue() {
    this.songkickservice
      .searchEventsOfVenue(this.venueResult)
      .subscribe((res: any) => {
        this.objetEventsOfVenue = res;
        if (this.objetEventsOfVenue.resultsPage.totalEntries != 0) {
          this.affichage2 = true;
        } else {
          this.affichage2 = false;
        }
      });
  }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.venueResult = params['id'];
      this.searchVenueDetails();
      this.searchEventsOfVenue();
    });
  }
}
