import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FindIndexService } from '../services/find-index.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  @Input()
  objetTest;
  // parametre de pagination
  p: number[] = [];
  id: number[] = [];

  constructor(private findindexservice : FindIndexService) { }

  scrollToElement(){
    let index=this.findindexservice.serviceIndex;
    let element = document.getElementById("item"+index);
    element.scrollIntoView({behavior:"smooth", block:"center", inline:"nearest"})
  }

  ngOnInit() {
  }

  ngOnChanges() {
    let mediaWidth=window.matchMedia("(min-width: 769px)");
    if (mediaWidth.matches){
      setTimeout(() => window.scrollTo({top:300, behavior : 'smooth'}), 300);
    }
    else {setTimeout(() => window.scrollTo({top:60, behavior : 'smooth'}), 500);}
  }

  ngDoCheck(){
    if (this.findindexservice.scrollElementBoolean==true) {
    this.scrollToElement();
    this.findindexservice.scrollElementBoolean=false;
  }
  }
}

