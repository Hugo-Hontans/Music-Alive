import { HostListener, Inject, Component, Injectable, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongkickService } from './services/songkick.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationService } from './services/location.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {

  artistName;
  performed = false;
  title = 'easy-musique';
  response;
  type;
  myLng: number;
  myLat: number;
  geoLoc = false;
  locationGeo;
  objetLoc;
  show = false;

  constructor(private service: SongkickService, private router: Router, private locService: LocationService,  ) {
    this.type = 'artist';
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  search(form: NgForm) {
    switch (form.value['type']) {
      case 'artist':
        const artist: string = form.value['searchValue'];
        this.router.navigate(['artists/' + artist]);
        break;

      case 'venue':
        const venue: string = form.value['searchValue'];
        this.router.navigate(['venues/' + venue]);
        break;

      case 'location':
        const location: string = form.value['searchValue'];
        this.router.navigate(['locations/' + location]);
        break;

      default:
        const error: string = form.value['searchValue'];
        this.router.navigate(['artists/' + error]);
        break;
    }

  }
   @HostListener('window:scroll', [])
   onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 255) {
      (document.querySelector('.toc') as HTMLElement).style.backgroundColor = 'grey';
    } else if (number < 255) {
      (document.querySelector('.toc') as HTMLElement).style.backgroundColor = 'transparent';
    }
  }


  displayLocationInfo = (position) => {
    this.myLng = position.coords.longitude;
    this.myLat = position.coords.latitude;
    this.geoLoc = true;
  }

  getGeolocalisation() {
    this.locService
      .apiCallGeoloc(this.myLat, this.myLng)
      .subscribe((res: any) => {
        this.objetLoc = res.resultsPage.results.location[0].metroArea.id;
        this.show = true;
        this.router.navigate(['locationcontent/' + this.objetLoc]);
      });
  }


  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }
  ngDoCheck() {
    if (this.geoLoc === true) {
    this.getGeolocalisation();
    this.geoLoc = false;
    }
  }


}
