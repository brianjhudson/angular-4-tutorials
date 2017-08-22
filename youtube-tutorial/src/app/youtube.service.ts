import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { SearchResult } from './search-result.model'

export const BASE_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YoutubeService {

  constructor(
    private http: Http, 
    @Inject('BASE_URL') private BASE_URL: string, 
    @Inject('YOUTUBE_API_KEY') private YOUTUBE_API_KEY: string  
  ) { 

  }

  searchVideos(searchTerm: string): Observable<any> {
    const queryArray = [
      `q=${searchTerm}`,
      `key=${this.YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ]
    const searchUrl = `${this.BASE_URL}?${queryArray.join('&')}`
    return this.http.get(searchUrl)
    .map((response: Response) => {
      return (<any>response.json()).items.map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });
  }
}
