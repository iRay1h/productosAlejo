import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {

  @Input()
  product!: Product;

  @Output()
  productDeleted = new EventEmitter<number>();

  public deleteProduct(): void {
    this.productDeleted.emit(this.product.id);
  }

}