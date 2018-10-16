import { CartemapComponent } from './cartemap/cartemap.component';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongkickService } from './services/songkick.service';
@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  performed = false;
  title = 'easy-musique';
  response;
  constructor (private service: SongkickService ) {}
  search(form: NgForm) {
    const artist: string = form.value['artist'];
    this.service.apiCall(artist).subscribe((data) => {
    this.response = data;
    this.performed = true; });
  }
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;

      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }
  }
}
