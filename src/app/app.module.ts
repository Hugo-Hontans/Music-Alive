import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CartemapComponent } from './cartemap/cartemap.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EventItemComponent } from './event-item/event-item.component';
import { SongkickService } from './services/songkick.service';
@NgModule({
  declarations: [
    AppComponent,
    CartemapComponent,
    EventlistComponent,
    FooterComponent,
    ContentComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SongkickService],
  bootstrap: [AppComponent]
})
export class AppModule {}
