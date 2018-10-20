import { LastFMService } from './../services/last-fm.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artist-result',
  templateUrl: './artist-result.component.html',
  styleUrls: ['./artist-result.component.css']
})
export class ArtistResultComponent implements OnInit {

  artistResult;
  objetArtists;

  constructor(private lastfmservice: LastFMService,
              private route: ActivatedRoute,
              ) {}

  searchArtists() {
    this.lastfmservice
      .searchArtists(this.artistResult)
      .subscribe((res: any) => {
        this.objetArtists = res;
      });
  }

  ngOnInit() {
    this.artistResult = this.route.snapshot.params['id'];
    this.searchArtists();
  }
}
