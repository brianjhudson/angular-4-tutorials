import { Component, EventEmitter,  } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[]
  constructor() {
    this.products = [
      new Product('1', 'Hat', '/assets/images/products/black-hat.jpg', ['Men', 'Apparel', 'Hats'], 13.99),
      new Product('2', 'Shoes', '/assets/images/products/black-shoes.jpg', ['Men', 'Apparel', 'Shoes'], 12.99),
      new Product('3', 'Jacket', '/assets/images/products/blue-jacket.jpg', ['Men', 'Apparel', 'Jackets'], 21.99),
    ]
  }
  selectProduct(product: Product): void {
    console.log('Product selected:', product)
  }
}
