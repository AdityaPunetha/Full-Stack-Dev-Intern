import { Component, OnInit } from '@angular/core';
import { CartItemsArray } from 'src/app/mock-cart-items';
import { SiteItem } from 'src/app/SiteItem';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  itemArray: SiteItem[] = CartItemsArray;

  constructor() {}

  ngOnInit(): void {}
}
