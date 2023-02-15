import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private cartService: CartService) { }
  numberOfItems: number = 0;

  ngOnInit(): void {
    this.cartService.getnumberOfItems$().subscribe((numberOfItems: number) => {
      this.numberOfItems = numberOfItems;
    });
  }
}
