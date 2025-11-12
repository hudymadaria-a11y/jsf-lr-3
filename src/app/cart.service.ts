import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<Product[]>([]);

  add(product: Product) {
    this.items.update(items => [...items, product]);
  }

  clear() {
    this.items.set([]);
  }

  getShipping() {
    return this.http.get<any[]>('/assets/shipping.json');
  }

  constructor(private http: HttpClient) {}
}