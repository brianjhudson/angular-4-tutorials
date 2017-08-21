import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'https://swapi.co/api/people/1'
@Injectable()
export class YoutubeService {

  constructor(private http: Http) { 

  }

  getVideo(searchTerm: string) {
    // return this.http.get(`${BASE_URL}?q=${searchTerm}&key=${API_KEY}`)
    return this.http.get(BASE_URL)
  }
}
