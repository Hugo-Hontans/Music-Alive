import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongkickService } from './services/songkick.service';
import { Router } from '@angular/router';
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
  constructor(private service: SongkickService, private router: Router) {
    this.type = 'artist';
  }
  search(form: NgForm) {
    switch (form.value['type']) {
      case 'artist':
        let artist: string = form.value['searchValue'];
        this.router.navigate(['artists/' + artist]);
        break;

      case 'venue':
        let venue: string = form.value['searchValue'];
        this.router.navigate(['venues/' + venue]);
        break;

      case 'location':
        let location: string = form.value['searchValue'];
        this.router.navigate(['locations/' + location]);
        break;

      default:
        let error: string = form.value['searchValue'];
        this.router.navigate(['artists/' + error]);
        break;
    }
  }
  ngOnInit() {
    let lng: any;
    let lat: any;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        lng = position.coords.longitude;
        lat = position.coords.latitude;
      });
    }
  }
}
