import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastFMService {
  apiKey = 'e6362621a0e90d003cb1c4cb45c7ab7e';
  artistName: string = 'orelsan';
  response;
  apiUrl =
    'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
    this.artistName +
    '&api_key=' +
    this.apiKey +
    '&format=json';

  constructor(private httpclient: HttpClient) {}

  searchMusic() {
    return this.httpclient.get(this.apiUrl);
  }
}
/*
lastfm
API key	e6362621a0e90d003cb1c4cb45c7ab7e
Shared secret	4cf443a348f8bdfe4480726ed50c538f

 http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=bedouine&api_key=e6362621a0e90d003cb1c4cb45c7ab7e&format=json

*/
