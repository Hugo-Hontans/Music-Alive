import { LocationService } from './services/location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CartemapComponent } from './cartemap/cartemap.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EventItemComponent } from './event-item/event-item.component';
import { Input } from '@angular/core';
import { ArtistpageComponent } from './artistpage/artistpage.component';
import { SongkickService } from './services/songkick.service';
import { AgmCoreModule } from '@agm/core';
import { MapmarkersComponent } from './mapmarkers/mapmarkers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LastFMService } from './services/last-fm.service';
import { ArtistResultComponent } from './artist-result/artist-result.component';
import { Routes, RouterModule } from '@angular/router';
import { ContentLocationComponent } from './content-location/content-location.component';
import { LocationResultComponent } from './location-result/location-result.component';
import { VenueResultComponent } from './venue-result/venue-result.component';
import { ContentVenueComponent } from './content-venue/content-venue.component';
import { VenuePageComponent } from './venue-page/venue-page.component';
import { CartemapvenueComponent } from './cartemapvenue/cartemapvenue.component';
import { FindIndexService } from './services/find-index.service';

const appRoutes: Routes = [
{path: 'artistcontent/:id', component: ContentComponent},
{path: 'artists/:id', component: ArtistResultComponent},
{path: 'locationcontent/:id', component: ContentLocationComponent},
{path: 'locations/:id', component: LocationResultComponent},
{path: 'venues/:id', component: VenueResultComponent},
{path: 'venuescontent/:id', component: ContentVenueComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CartemapComponent,
    EventlistComponent,
    FooterComponent,
    ContentComponent,
    EventItemComponent,
    ArtistpageComponent,
    MapmarkersComponent,
    ArtistResultComponent,
    ContentLocationComponent,
    LocationResultComponent,
    VenueResultComponent,
    ContentVenueComponent,
    VenuePageComponent,
    CartemapvenueComponent

  ],
  imports: [
    BrowserAnimationsModule ,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNiGHB5tcAsl9ilspi0aqb093Nlvdy5L8'
    }),
    NgxPaginationModule
  ],
  providers: [LastFMService, SongkickService, LocationService, FindIndexService],
  bootstrap: [AppComponent]
})
export class AppModule {}
