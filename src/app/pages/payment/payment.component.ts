import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private cartService: CartService) { }

  totalPrice$ = this.cartService.getTotalPrice$();

  ngAfterViewInit() {
    setTimeout(() => {
      this.cartService.emitObservable()
    });
  }
}
