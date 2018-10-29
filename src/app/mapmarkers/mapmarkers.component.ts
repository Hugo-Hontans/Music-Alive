import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FindIndexService } from '../services/find-index.service';

@Component({
  selector: 'app-mapmarkers',
  templateUrl: './mapmarkers.component.html',
  styleUrls: ['./mapmarkers.component.css']
})
export class MapmarkersComponent implements OnInit {
  @Input() oneEvent;
  @Input() index;
  isOpenBoolean = false;

  constructor(private findindexservice : FindIndexService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    if (this.findindexservice.index == this.index){
      this.isOpenBoolean=true;
    }
    else {
      this.isOpenBoolean=false;
    }
  }

}
