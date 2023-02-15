import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ListItemsService } from 'src/app/services/list-items.service';

@Component({
  selector: 'app-leopold-gears',
  templateUrl: './leopold-gears.component.html',
  styleUrls: ['./leopold-gears.component.scss']
})
export class LeopoldGearsComponent implements OnInit {
  constructor(private itemsService: ListItemsService, private cartService: CartService) { }

  LEOPOLDGEARS: any;

  ngOnInit(): void {
    this.LEOPOLDGEARS = this.itemsService.getLeopoldGears();
  }

  addCart(gear: any) {
    this.cartService.addCart(gear);

    this.LEOPOLDGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = true;
      }
    });
  }

  removeCart(gear: any) {
    this.cartService.removeCart(gear);

    this.LEOPOLDGEARS.map((item: any) => {
      if (item.id === gear.id) {
        item.isAdded = false;
      }
    });
  }
} 
