import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product: any;

  @Output() addCartCallback: EventEmitter<any> = new EventEmitter();;
  @Output() removeCartCallback: EventEmitter<any> = new EventEmitter();;

  constructor() { }

  addCart(product: any) {
    this.addCartCallback.emit(product);
  }

  removeCart(product: any) {
    this.removeCartCallback.emit(product);
  }
}
