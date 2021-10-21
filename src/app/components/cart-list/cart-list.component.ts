import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { SiteItem } from 'src/app/SiteItem';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  itemArray: SiteItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.itemArray = this.cartService.getItemArray();
  }
}
