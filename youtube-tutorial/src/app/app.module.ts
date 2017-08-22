import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { YoutubeService, BASE_URL } from './youtube.service';
import { YOUTUBE_API_KEY } from './api-keys';

import { AppComponent } from './app.component';
import { SimpleRequestComponent } from './simple-request/simple-request.component';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component'


@NgModule({
  declarations: [
    AppComponent,
    SimpleRequestComponent,
    SearchComponent,
    SearchBoxComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    YoutubeService,
    {provide: 'BASE_URL', useValue: BASE_URL},
    {provide: 'YOUTUBE_API_KEY', useValue: YOUTUBE_API_KEY}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
