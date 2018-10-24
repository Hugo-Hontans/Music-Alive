import { LastFMService } from './../services/last-fm.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-artist-result',
  templateUrl: './artist-result.component.html',
  styleUrls: ['./artist-result.component.css']
})
export class ArtistResultComponent implements OnInit {
  artistResult;
  objetArtists;

  //parametre de pagination
  p: number[] = [];
  id: number[] = [];
  constructor(
    private lastfmservice: LastFMService,
    private route: ActivatedRoute
  ) {}

  searchArtists() {
    this.lastfmservice
      .searchArtists(this.artistResult)
      .subscribe((res: any) => {
        this.objetArtists = res;
        console.log(this.objetArtists);
      });
  }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.artistResult = params['id'];
      this.searchArtists();
    });
  }
}
