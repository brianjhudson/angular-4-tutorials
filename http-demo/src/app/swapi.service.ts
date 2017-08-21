import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SwapiService {

  constructor(private http: Http, @Inject('BASE_URL') private BASE_URL: string) { 
  }

  getCharacter() {
    return this.http.get(this.BASE_URL)
  }

}
