import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ListItemsService } from 'src/app/services/list-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private listItemsSerice: ListItemsService, private cartService: CartService) { }

  AKKOGEARS: any;
  LEOPOLDGEARS: any;

  ngOnInit(): void {
    this.AKKOGEARS = this.listItemsSerice.getRandomAkkoGears();
    this.LEOPOLDGEARS = this.listItemsSerice.getRandomLeopoldGears();
  }

  addCartAkko(gear: any) {
    this.cartService.addCart(gear);

    this.AKKOGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = true;
      }
    });
  }

  removeCartAkko(gear: any) {
    this.cartService.removeCart(gear);

    this.AKKOGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = false;
      }
    });
  }

  addCartLeopold(gear: any) {
    this.cartService.addCart(gear);

    this.LEOPOLDGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = true;
      }
    });
  }

  removeCartLeopold(gear: any) {
    this.cartService.removeCart(gear);

    this.LEOPOLDGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = false;
      }
    });
  }
}
