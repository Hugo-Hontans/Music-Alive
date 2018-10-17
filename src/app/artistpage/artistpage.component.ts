import { Component, OnInit } from '@angular/core';
import { LastFMService } from '../services/last-fm.service';

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})
export class ArtistpageComponent implements OnInit {
  searchStr: string;
  searchResult: boolean;

  name;
  image;
  onTour;
  affichageOnTour;
  similarArtist;
  summary;

  constructor(private lastFmService: LastFMService) {}

  searchMusic() {
    this.searchResult = true;
    this.lastFmService.searchMusic().subscribe((res: any) => {
      console.log('julien');
      console.log(res);

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
    });
  }

  ngOnInit() {
    this.searchMusic();
  }
}
