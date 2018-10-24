import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiGeoLocUrl="https://api.songkick.com/api/3.0/search/locations.json?&apikey=jGIjCGirpGWFCCqb&location=geo:"

  constructor(private http:HttpClient) { }
  apiCallGeoloc(lat, lng){
    return this.http.get(this.apiGeoLocUrl+lat+","+lng);
  }
}
