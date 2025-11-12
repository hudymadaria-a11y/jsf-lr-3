import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

export interface Shipping {
  type: string;
  price: number;
}

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  private cartService = inject(CartService);
  prices = signal<Shipping[]>([]);

  constructor() {
    this.cartService.getShipping().subscribe(prices => this.prices.set(prices));
  }
}