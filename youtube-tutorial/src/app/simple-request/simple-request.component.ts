import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'simple-request',
  templateUrl: './simple-request.component.html',
  styleUrls: ['./simple-request.component.css']
})
export class SimpleRequestComponent implements OnInit {
  private data: any
  private keys: string[]

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/people/1')
    .subscribe(res => {
      console.log(res)
      this.data = res.json()
      this.keys = Object.keys(this.data)
    })
  }

}
