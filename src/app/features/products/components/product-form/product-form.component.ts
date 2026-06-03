import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {

  @Output()
  productCreated = new EventEmitter<void>();

  public name: string = '';
  public price: number = 0;

  constructor(private productService: ProductService) {}

  public createProduct(): void {

    if (!this.name || this.price <= 0) {
      return;
    }

    this.productService.createProduct(
      this.name,
      this.price
    );

    this.productCreated.emit();

    this.name = '';
    this.price = 0;
  }

}