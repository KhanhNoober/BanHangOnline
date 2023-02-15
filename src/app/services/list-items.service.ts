import { Injectable, OnInit } from '@angular/core';
import AKKO_GEAR from '../items/AKKO_GEARS.json';
import LEOPOLD_GEAR from '../items/LEOPOLD_GEARS.json';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  constructor() { }

  akkoGears = AKKO_GEAR.map(keyboard => { return { ...keyboard, isAdded: false } });
  leopoldGears = LEOPOLD_GEAR.map(keyboard => { return { ...keyboard, isAdded: false } });

  getAkkoGears() {
    return this.akkoGears
  }

  getLeopoldGears() {
    return this.leopoldGears
  }

  getRandomAkkoGears() {
    return this.akkoGears.sort(() => Math.random() - 0.5).slice(0, 5)
  }

  getRandomLeopoldGears() {
    return this.leopoldGears.sort(() => Math.random() - 0.5).slice(0, 5)
  }
}
