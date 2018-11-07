import { HostListener, Inject, Component, Injectable, OnInit, HostBinding} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongkickService } from './services/songkick.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationService } from './services/location.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('scrolledNotScrolled', [
      state('scrolled', style({
        backgroundColor: 'grey',
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
      })),
      state('notscrolled', style({
        backgroundColor: 'transparent',
        boxShadow: 'none'
      })),
      transition('notscrolled => scrolled', [
        animate('0.20s')
      ]),
      transition('scrolled => notscrolled', [
        animate('0.05s')
      ]),
    ])
  ]
})
@Injectable()
export class AppComponent implements OnInit {
  screenSize: number ;
  isScrolled = false;
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
    if (number > 255 && this.screenSize > 768 ) {
      this.isScrolled = true;
    } else if (number < 255) {
      this.isScrolled = false;
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
    this.screenSize = window.innerWidth ;
  }
  ngDoCheck() {
    if (this.geoLoc === true) {
    this.getGeolocalisation();
    this.geoLoc = false;
    }
  }


}
