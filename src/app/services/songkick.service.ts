import { LastFMService } from './last-fm.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SongkickService {
  artistName;
  private apiUrl =
    'https://api.songkick.com/api/3.0/events.json?apikey=jGIjCGirpGWFCCqb&artist_name=';
  constructor(private http: HttpClient) {}
  apiCall(artist: string) {
    this.artistName = artist;
    return this.http.get(this.apiUrl + artist);
  }
  getArtistName() {
    return this.artistName;
  }
}
