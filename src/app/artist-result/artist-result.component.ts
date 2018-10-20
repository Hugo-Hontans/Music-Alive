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
  objetArtists;

  //parametre de pagination
  p: number[] = [];
  id: number[] = [];
  constructor(private lastfmservice: LastFMService) {}

  searchArtists() {
    this.lastfmservice
      .searchArtists(this.artistResult)
      .subscribe((res: any) => {
        this.objetArtists = res;
      });
  }

  ngOnInit() {}
  ngOnChanges() {
    this.searchArtists();
    console.log(this.objetArtists);
  }
}
