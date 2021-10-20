import { Component, OnInit } from '@angular/core';
import { SiteItem } from 'src/app/SiteItem';
import { CartItemsArray } from 'src/app/mock-cart-items';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  itemArray: SiteItem[] = CartItemsArray;
  item: SiteItem;

  constructor() {}

  ngOnInit(): void {}
  calc() {
    let s = CartItemsArray.map((a) => a.price).reduce(function (a, b) {
      return a + b;
    });
    return s;
  }
}
