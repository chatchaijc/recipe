import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;
  constructor() {}
  @Output()
  Onselected: EventEmitter<ProductItemComponent> = new EventEmitter();

  isSelected: boolean;

  ngOnInit(): void {}

  select() {
    this.Onselected.emit(this);
    // console.log('ok you click!', this.product);
    // alert(`Product ${this.product.name} selected`);
  }
}
