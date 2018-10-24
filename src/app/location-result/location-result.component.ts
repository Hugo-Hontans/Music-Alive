import { SongkickService } from './../services/songkick.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-location-result',
  templateUrl: './location-result.component.html',
  styleUrls: ['./location-result.component.css']
})
export class LocationResultComponent implements OnInit {
  locationResult;
  objetLocation;
  affichage = false;

  constructor(
    private songkickservice: SongkickService,
    private route: ActivatedRoute
  ) {}

  searchLocation() {
    this.songkickservice
      .searchLocation(this.locationResult)
      .subscribe((res: any) => {
        this.objetLocation = res;
        this.affichage=true;
      });
  }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.locationResult = params['id'];
      this.searchLocation();
    });
  }
}
