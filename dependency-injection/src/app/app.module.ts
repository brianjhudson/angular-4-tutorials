import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { PriceService } from './price.service';
import { SigninComponent } from './signin/signin.component';
import { UserService } from './user.service';
import { Metric, AnalyticsImplementation } from './analytics.interface'
import { AnalyticsService } from './analytics.service'
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    // Singleton services
      // shortcut for {provide: PriceService, useClass: PriceService}
    PriceService, 
    UserService,
    
    // Constant value
    {provide: 'API_URL', useValue: 'http://localhost:4000/api/endpoint'},

    // Factory service
      // For passing values to service constructor, as in implementations
      // useFactory returns what will be provided
    {provide: AnalyticsService, useFactory() {
      const logger: AnalyticsImplementation = {
        recordEvent(metric: Metric) {
          console.log("Metric", metric)
        }
      }
      return new AnalyticsService(logger)
    }},

    // A more complex factory with dependencies

    {
      provide: AnalyticsService, 
      deps: [Http, 'API_URL'],
      useFactory(http: Http, apiUrl: string) {
        const loggerTwo: any = {
          recordEvent(metric: Metric) {
            console.log(this.apiUrl)
            console.log(metric)
          }
         }
        return new AnalyticsService(loggerTwo)
      }
    }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
