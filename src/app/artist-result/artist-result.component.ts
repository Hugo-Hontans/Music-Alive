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
  // boolean pour eviter les erreurs de la console lors du chargement du component
  affichage = false;

  //parametre de pagination
  p: number[] = [];
  id: number[] = [];
  constructor(private lastfmservice: LastFMService,
              private route: ActivatedRoute,
              ) {}

  searchArtists() {
    this.lastfmservice
      .searchArtists(this.artistResult)
      .subscribe((res: any) => {
        this.objetArtists = res;
        this.affichage = true;
      });
  }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.artistResult = params["id"];
      this.searchArtists();
    })   
  }
}
