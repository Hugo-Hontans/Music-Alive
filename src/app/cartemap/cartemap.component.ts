import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { FindIndexService } from '../services/find-index.service';


@Component({
  selector: 'app-cartemap',
  templateUrl: './cartemap.component.html',
  styleUrls: ['./cartemap.component.css']
})
export class CartemapComponent implements OnInit {

  @Input() objetTest;
  index;
  @Input() affichageTitrePourLocation;

  //donner des positions; les variables sont à lire dans "[longitude]" et "[latitude]"
  //dans l'HTML afin de donner des positions sur la carte
  lat: number;
  lng: number;
  isOpenBoolean:boolean[];

  constructor(private findindexservice : FindIndexService) {}


  ngOnInit(){
  }
  ngOnChanges(){
    this.lng = this.objetTest.resultsPage.results.event[0].venue.lng;
    this.lat = this.objetTest.resultsPage.results.event[0].venue.lat;
  }
  ngDoCheck(){
    if (this.findindexservice.doCheckCarteMap != false){
      this.index = this.findindexservice.index;
      this.lng = this.objetTest.resultsPage.results.event[this.index].venue.lng;
      this.lat = this.objetTest.resultsPage.results.event[this.index].venue.lat;
      this.findindexservice.doCheckCarteMap = false;
    }
  }

}

