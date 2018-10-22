import { Component, OnInit, Input } from '@angular/core';;


@Component({
  selector: 'app-cartemap',
  templateUrl: './cartemap.component.html',
  styleUrls: ['./cartemap.component.css']
})
export class CartemapComponent implements OnInit {

  @Input() objetTest;

  //donner des positions; les variables sont à lire dans "[longitude]" et "[latitude]"
  //dans l'HTML afin de donner des positions sur la carte
  lat: number = 45.750000;
  lng: number = 4.850000;

  


  ngOnInit(){
      this.lng = this.objetTest.resultsPage.results.event[0].venue.lng;
      this.lat = this.objetTest.resultsPage.results.event[0].venue.lat;
  }

}

