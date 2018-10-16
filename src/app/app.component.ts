import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongkickService } from './services/songkick.service';
@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
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
}
