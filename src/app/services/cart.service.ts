import { Injectable } from '@angular/core';
import { CartItemsArray } from 'src/app/mock-cart-items';
import { SiteItem } from 'src/app/SiteItem';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  getItemArray(): SiteItem[] {
    return CartItemsArray;
  }
}
