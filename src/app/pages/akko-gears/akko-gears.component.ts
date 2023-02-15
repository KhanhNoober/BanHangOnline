import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ListItemsService } from 'src/app/services/list-items.service';

@Component({
  selector: 'app-akko-gears',
  templateUrl: './akko-gears.component.html',
  styleUrls: ['./akko-gears.component.scss']
})
export class AkkoGearsComponent implements OnInit {
  constructor(private listItemsSerice: ListItemsService, private cartService: CartService) { }

  AKKOGEARS: any;

  ngOnInit(): void {
    this.AKKOGEARS = this.listItemsSerice.getAkkoGears();
  }

  addCart(gear: any) {
    this.cartService.addCart(gear);

    this.AKKOGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = true;
      }
    });
  }

  removeCart(gear: any) {
    this.cartService.removeCart(gear);

    this.AKKOGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = false;
      }
    });
  }

}
