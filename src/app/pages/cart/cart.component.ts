import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) { }

  carts = new Array();
  totalPrice$ = this.cartService.getTotalPrice$();

  ngOnInit(): void {
    this.carts = this.cartService.getCart();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.cartService.emitObservable()
    });
  }

  onIncrement(product: any) {
    this.cartService.increment(product);
  }

  onDecrement(product: any) {
    this.cartService.decrement(product);
  }
}
