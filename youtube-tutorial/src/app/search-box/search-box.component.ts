import { Component, OnInit, Output, ElementRef, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { YoutubeService } from '../youtube.service';
import { SearchResult } from '../search-result.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() updateResults: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>()
  constructor(private el: ElementRef, private youtube: YoutubeService) {

  }
  search(form) {
    console.log(form.search)
  }

  submit(value:string): void {
    console.log(value)
  }
  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter(val => val.length > 1)
    .debounceTime(250)
    .map(query => this.youtube.searchVideos(query))
    .switch()
    .subscribe((results: SearchResult[]) => {
      console.log(results)
      this.updateResults.emit(results)
    })
    

  }

}
