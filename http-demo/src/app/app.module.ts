import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { SwapiService } from './swapi.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'BASE_URL', useValue: 'https://swapi.co/api/people/1'},
    // {
    //   provide: SwapiService, 
    //   deps: [Http, 'BASE_URL'], 
    //   useFactory(http: Http, BASE_URL: string){
    //     return new SwapiService(http, BASE_URL)
    //   }
    // }
    SwapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
