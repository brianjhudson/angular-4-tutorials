import { Injectable } from '@angular/core';

@Injectable()
export class PriceService {
  stateTax: number = 0.825
  
  calculateTotalPrice(basePrice: number): number {
    return basePrice * (1 + this.stateTax)
  }

}
