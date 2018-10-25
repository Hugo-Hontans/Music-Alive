import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cartemapvenue',
  templateUrl: './cartemapvenue.component.html',
  styleUrls: ['./cartemapvenue.component.css']
})
export class CartemapvenueComponent implements OnInit {

  @Input() objetVenue;

  //donner des positions; les variables sont à lire dans "[longitude]" et "[latitude]"
  //dans l'HTML afin de donner des positions sur la carte
	lat: number = 55;
	lng: number = 12;


  


  ngOnInit(){
  }
  ngOnChanges(){
      this.lng = this.objetVenue.resultsPage.results.venue.lng;
      this.lat = this.objetVenue.resultsPage.results.venue.lat;
  }

}