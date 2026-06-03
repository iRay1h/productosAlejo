import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [];

  private nextId: number = 1;

  public listProducts(): Product[] {
    return this.products;
  }

  public createProduct(name: string, price: number): void {

    const newProduct: Product = {
      id: this.nextId,
      name: name,
      price: price,
    };

    this.products.push(newProduct);
    this.nextId++;
  }

  public deleteProduct(id: number): void {
    this.products = this.products.filter(
      product => product.id !== id
    );
  }

}