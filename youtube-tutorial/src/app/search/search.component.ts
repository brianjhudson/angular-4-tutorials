import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SearchResult } from '../search-result.model'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private results: SearchResult[]
  
  updateResults(results: SearchResult[]): void {
    this.results = results
  }
  ngOnInit() {
  }

}
