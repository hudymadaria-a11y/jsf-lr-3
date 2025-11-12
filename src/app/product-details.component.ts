import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';
import { products } from './products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService);

  product = products[0];
  showToast = false; 

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = products.find(p => p.id === id) || products[0];
  }

  addToCart() {
    this.cartService.add(this.product);

    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2500);
  }
}