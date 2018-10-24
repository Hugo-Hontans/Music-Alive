import { Component, OnInit, Input, OnChanges } from '@angular/core';;


@Component({
  selector: 'app-cartemap',
  templateUrl: './cartemap.component.html',
  styleUrls: ['./cartemap.component.css']
})
export class CartemapComponent implements OnInit {

  @Input() objetTest;

  //donner des positions; les variables sont à lire dans "[longitude]" et "[latitude]"
  //dans l'HTML afin de donner des positions sur la carte
  lat: number;
  lng: number; 

  


  ngOnInit(){
  }
  ngOnChanges(){
      this.lng = this.objetTest.resultsPage.results.event[0].venue.lng;
      this.lat = this.objetTest.resultsPage.results.event[0].venue.lat;
  }

}

