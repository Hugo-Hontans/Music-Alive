import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LastFMService } from '../services/last-fm.service';

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})
export class ArtistpageComponent implements OnInit {
  @Input() artistName;
  @Input() affichage;

  name;
  image;
  affichageOnTour;
  similarArtist;
  summary;
  errorMessage = '';

  constructor(
    private lastFmService: LastFMService,
  ) {}

  searchMusic() {
    this.lastFmService.searchMusic(this.artistName).subscribe((res: any) => {
      if (res.error === 6) {
        this.errorMessage = this.artistName + ' was not found. Please try another request.' ;
      }
      else {
        this.errorMessage = null;
        this.name = res.artist.name;
        this.image = res.artist.image[4]['#text'];
        this.summary = res.artist.bio.summary;
        this.similarArtist = res.artist.similar.artist;
        if (this.affichage === false) {
          this.affichageOnTour = 'No concert found';
        }
        else {
          this.affichageOnTour = 'On tour';
        }

        const regex = /(<([^>]+)>)/gi;
        this.summary = this.summary.replace(regex, '');
        this.summary = this.summary.replace('Read more on Last.fm', '');
        if (this.summary === ' ') {
          this.summary = 'We don\'t know this artist\'s bio.';
        }
      }
    });
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.searchMusic();
  }
}
