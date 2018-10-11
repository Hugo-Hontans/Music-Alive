import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'easy-musique';
  response;
  private apiUrl = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=jGIjCGirpGWFCCqb&query=';
  constructor (private http: HttpClient ) {}
  search(form: NgForm) {
    const artist: string = form.value['artist'];
    this.http.get(this.apiUrl + artist).subscribe( (data) => {
      this.response = data;
      console.log(data);
    });

  }
}


