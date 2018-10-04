import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
