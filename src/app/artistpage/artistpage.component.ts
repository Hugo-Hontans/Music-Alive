import { Component, OnInit } from '@angular/core';
import { LastFMService } from '../services/last-fm.service';
import { SongkickService } from '../services/songkick.service';

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})
export class ArtistpageComponent implements OnInit {
  name;
  image;
  onTour;
  affichageOnTour;
  similarArtist;
  summary;

  artistName;

  constructor(
    private lastFmService: LastFMService,
    private songkickservice: SongkickService
  ) {}

  searchMusic() {
    this.lastFmService.searchMusic(this.artistName).subscribe((res: any) => {
      this.name = res.artist.name;
      this.onTour = res.artist.ontour;
      this.image = res.artist.image[4]['#text'];
      this.summary = res.artist.bio.summary;
      this.similarArtist = res.artist.similar.artist;
      if (this.onTour == 0) {
        this.affichageOnTour = 'Not on tour';
      } else {
        this.affichageOnTour = 'On tour';
      }

      const regex = /(<([^>]+)>)/gi;
      this.summary = this.summary.replace(regex, '');
      this.summary = this.summary.replace('Read more on Last.fm', '');
    });
  }

  getArtistName() {
    this.artistName = this.songkickservice.getArtistName();
  }

  ngOnInit() {
    this.getArtistName();
    this.searchMusic();
  }
}
