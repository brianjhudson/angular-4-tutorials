import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sku-component',
  templateUrl: './sku-component.component.html',
  styleUrls: ['./sku-component.component.css']
})
export class SkuComponentComponent implements OnInit {

  constructor() { }

  onSubmit(form: any): void {
    console.log(form)
  }
  ngOnInit() {
  }

}
