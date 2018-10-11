import { Component, Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'easy-musique';
  private apiUrl = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=jGIjCGirpGWFCCqb&query=';
  apiCall(form: NgForm) {
    const artist: string = form.value['artist'];
    console.log(artist);
  }
}

