import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartemapComponent } from './cartemap/cartemap.component';
import { EventlistComponent } from './eventlist/eventlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CartemapComponent,
    EventlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
