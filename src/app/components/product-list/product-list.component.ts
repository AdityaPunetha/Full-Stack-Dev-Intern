import { Component, OnInit } from '@angular/core';
import { SiteItem } from 'src/app/SiteItem';
import { ProductItemsArray } from 'src/app/mock-product-items';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productArray: SiteItem[] = ProductItemsArray;

  constructor() {}

  ngOnInit(): void {}
}
