import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cart = new Array();

  cart$ = new Subject<any>;
  numberOfItems$ = new Subject<number>;
  totalPrice$ = new Subject<number>;

  getCart() {
    return this.cart;
  }

  getCart$() {
    return this.cart$;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cart.forEach((item: any) => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
  }

  getTotalPrice$() {
    return this.totalPrice$;
  }

  getNumberOfItems() {
    return this.cart.length;
  }

  getnumberOfItems$() {
    return this.numberOfItems$;
  }

  emitObservable() {
    this.cart$.next(this.cart);
    this.numberOfItems$.next(this.cart.length);
    this.totalPrice$.next(this.getTotalPrice());
  }

  addCart(product: any) {
    this.cart.push({
      product: product,
      quantity: 1
    });

    this.emitObservable();
  }

  increment(product: any) {
    this.cart.forEach((item: any) => {
      if (item.product.id === product.id) {
        item.quantity += 1;
      }
    });

    this.emitObservable();
  }

  decrement(product: any) {
    this.cart.forEach((item: any) => {
      if (item.product.id === product.id) {
        if (item.quantity <= 1) return;
        item.quantity -= 1;
      }
    });

    this.emitObservable();
  }

  removeCart(product: any) {
    this.cart.splice(this.cart.indexOf(product), 1);

    this.emitObservable();
  }

  clearCart() {
    this.cart = Array();
    this.emitObservable();
  }
}
