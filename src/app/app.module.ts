import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartemapComponent } from './cartemap/cartemap.component';
import { EventlistComponent } from './eventlist/eventlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CartemapComponent,
    EventlistComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const path="https://api.songkick.com/api/3.0/search/artists.json?apikey=";
const pathcomp="&query="
const apiKey="ZHKVrD2Nr66ufY7q";
let artist="";
let acces="";
function getEvents(){
  artist = (<HTMLInputElement>document.getElementById("artist")).value;
  acces = path + apiKey + pathcomp + artist;
  fetch(acces)
      .then(response => response.json())
      .then(data => {
        document.getElementById("venue").innerHTML = data.resultPage.results.artist.uri;
      })
  .catch(error => console.error(error))
}