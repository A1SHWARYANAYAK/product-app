// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, description: 'A high-performance laptop.' },
    { id: 2, name: 'Phone', price: 800, description: 'A latest-generation smartphone.' },
    { id: 3, name: 'Headphones', price: 150, description: 'Noise-canceling wireless headphones.' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
