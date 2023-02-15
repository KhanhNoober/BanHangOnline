import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product: any;
  @Input() quantity: number = 1;

  @Output() increment: EventEmitter<any> = new EventEmitter();
  @Output() decrement: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onIncrement() {
    this.increment.emit(this.product);
  }

  onDecrement() {
    this.decrement.emit(this.product);
  }
}
