import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongkickService } from './services/songkick.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  artistName;
  performed = false;
  title = 'easy-musique';
  response;
  type;
  constructor (private service: SongkickService ) {
    this.type = 'artist';
  }
  search(form: NgForm) {
    const artist: string = form.value['artist'];
    this.type = form.value['type'];
    this.service.apiCall(artist).subscribe((data) => {
    this.response = data;
    this.performed = true; });
    this.artistName = artist;
  }
  ngOnInit() {
    let lng;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      lng = position.coords.longitude;
      lat = position.coords.latitude;

      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }
  }
}
