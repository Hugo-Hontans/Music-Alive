import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastFMService {
  formatJson = '&format=json';
  response;
  apiUrl =
    'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=e6362621a0e90d003cb1c4cb45c7ab7e&artist=';
  apiUrlSearchArtist =
    'http://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=e6362621a0e90d003cb1c4cb45c7ab7e&artist=';

  constructor(private httpclient: HttpClient) {}

  //getInfo et artistPage
  searchMusic(artistName) {
    return this.httpclient.get(this.apiUrl + artistName + this.formatJson);
  }
  //location et artistResult
  searchArtists(artistResult) {
    return this.httpclient.get(
      this.apiUrlSearchArtist + artistResult + this.formatJson
    );
  }
}
/*
lastfm
API key	e6362621a0e90d003cb1c4cb45c7ab7e
Shared secret	4cf443a348f8bdfe4480726ed50c538f
getartist adress
 http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json

*/
