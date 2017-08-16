import { PriceService } from './price.service'

export class Product {
  basePrice: number
  service: PriceService
  constructor(service: PriceService, basePrice: number) {
    this.service = service
    this.basePrice = basePrice
  }

  getTotal(): number {
    return this.service.calculateTotalPrice(this.basePrice)
  }
}