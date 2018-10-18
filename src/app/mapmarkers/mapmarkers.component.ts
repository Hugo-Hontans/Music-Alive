import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapmarkers',
  templateUrl: './mapmarkers.component.html',
  styleUrls: ['./mapmarkers.component.css']
})
export class MapmarkersComponent implements OnInit {
  @Input() index;

  constructor() { }

  ngOnChanges() {
  }
  ngOnInit() {
  }

}
