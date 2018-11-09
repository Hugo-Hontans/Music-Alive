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
  lat: number;
  lng: number;
  isOpenBoolean:boolean[];
  show=true;
  openMap = "Open map";
  constructor(private findindexservice : FindIndexService) {}

  collapse(){
    if (this.show==true){
      this.show=false;
      this.openMap = "Open map";
      this.findindexservice.showScrollMapButton=true;
    }
    else {
      this.findindexservice.showScrollMapButton=false;
      this.show=true;
      this.openMap = "Close map";
    }
  }
  scrollTo() {
      let element = document.getElementById("carte");
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }


  ngOnInit(){
     let mediaWidth=window.matchMedia("(max-width: 768px)");
    if (mediaWidth.matches){
      this.show=false;
      this.findindexservice.showScrollMapButton=true;
    }
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
    if (this.findindexservice.scrollBoolean){
      this.scrollTo();
      this.findindexservice.scrollBoolean = false;
    }
  }

}

