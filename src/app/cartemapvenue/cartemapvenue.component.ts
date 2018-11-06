import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { FindIndexService } from '../services/find-index.service';

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

  constructor(private findindexservice : FindIndexService) {}

    scrollTo() {
      let element = document.getElementById("carte");
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

  ngOnInit(){
  }
  ngOnChanges(){
      this.lng = this.objetVenue.resultsPage.results.venue.lng;
      this.lat = this.objetVenue.resultsPage.results.venue.lat;
  }



  ngDoCheck(){
    if (this.findindexservice.scrollBoolean){
      this.scrollTo();
      this.findindexservice.scrollBoolean = false;
    }
  }

}