import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SongkickService {
  private apiUrl =
    'https://api.songkick.com/api/3.0/events.json?apikey=jGIjCGirpGWFCCqb&artist_name=';

  private apiUrlLocation =
    'https://api.songkick.com/api/3.0/search/locations.json?&apikey=jGIjCGirpGWFCCqb&query=';
  private apiUrlVenue =
    'https://api.songkick.com/api/3.0/search/venues.json?&apikey=jGIjCGirpGWFCCqb&query=';

  private apiUrlLocationSearch1 =
    'https://api.songkick.com/api/3.0/metro_areas/';
  private apiUrlLocationSearch2 = '/calendar.json?apikey=jGIjCGirpGWFCCqb';
  private apiUrlVenueDetails1 = 'https://api.songkick.com/api/3.0/venues/';
  private apiUrlVenueDetails2 = '.json?apikey=jGIjCGirpGWFCCqb';

  //liste des events d'une salle selectionnée
  private apiUrlEventsOfVenue1 = 'https://api.songkick.com/api/3.0/venues/'; // + {venue_id}
  private apiUrlEventsOfVenue2 = '/calendar.json?apikey=jGIjCGirpGWFCCqb';

  constructor(private http: HttpClient) {}

  apiCall(artist) {
    return this.http.get(this.apiUrl + artist);
  }

  apiCallLocationSearch(id) {
    return this.http.get(
      this.apiUrlLocationSearch1 + id + this.apiUrlLocationSearch2
    );
  }

  searchLocation(locationResult) {
    return this.http.get(this.apiUrlLocation + locationResult);
  }

  searchVenue(venueResult) {
    return this.http.get(this.apiUrlVenue + venueResult);
  }
  searchVenueDetails(venueResult) {
    return this.http.get(
      this.apiUrlVenueDetails1 + venueResult + this.apiUrlVenueDetails2
    );
  }

  searchEventsOfVenue(venueId) {
    return this.http.get(
      this.apiUrlEventsOfVenue1 + venueId + this.apiUrlEventsOfVenue2
    );
  }
}
