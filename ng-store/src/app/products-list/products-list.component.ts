import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() handleProductClick: EventEmitter<Product>;

  private currentProduct: Product;
  constructor() {
    this.handleProductClick = new EventEmitter();
   }
   handleClick(product: Product):void {
    this.handleProductClick.emit(product)
    this.currentProduct = product
   }
   isSelected(product: Product): boolean {
     if (!product || !this.currentProduct) return false;
     return product.sku === this.currentProduct.sku
   }

  ngOnInit() {
  }

}
