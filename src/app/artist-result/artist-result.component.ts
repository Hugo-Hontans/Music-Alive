import { LastFMService } from './../services/last-fm.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-artist-result',
  templateUrl: './artist-result.component.html',
  styleUrls: ['./artist-result.component.css']
})
export class ArtistResultComponent implements OnInit {
  @Input()
  artistResult;
  json;

  name;

  constructor(private lastfmservice: LastFMService) {}

  searchArtists() {
    this.lastfmservice
      .searchArtists(this.artistResult)
      .subscribe((res: any) => {
        this.json = res;
      });
  }

  ngOnInit() {}
  ngOnChanges() {
    this.searchArtists();
    console.log(this.json);
  }
}
