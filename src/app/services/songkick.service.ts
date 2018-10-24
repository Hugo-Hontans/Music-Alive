import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SongkickService {
  private apiUrl =
    'https://api.songkick.com/api/3.0/events.json?apikey=jGIjCGirpGWFCCqb&location=&artist_name=';
  private apiUrlLocation =
    'https://api.songkick.com/api/3.0/search/locations.json?&apikey=jGIjCGirpGWFCCqb&query=';
    private apiUrlVenue =
    'https://api.songkick.com/api/3.0/search/venues.json?&apikey=jGIjCGirpGWFCCqb&query='

  constructor(private http: HttpClient) {}

  apiCall(artist) {
    return this.http.get(this.apiUrl + artist);
  }

  searchLocation(locationResult) {
    return this.http.get(this.apiUrlLocation + locationResult);
  }

  searchVenue(venueResult){
    return this.http.get(this.apiUrlVenue + venueResult);

  }
}
