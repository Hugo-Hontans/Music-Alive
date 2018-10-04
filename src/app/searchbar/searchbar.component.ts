import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

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