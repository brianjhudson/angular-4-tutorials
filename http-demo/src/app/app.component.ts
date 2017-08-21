import { Component } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor(private swapiService: SwapiService) {
    this.swapiService.getCharacter()
    .subscribe(res => {
      this.data = res.json()
      console.log(this.data)
    })
  }
}
