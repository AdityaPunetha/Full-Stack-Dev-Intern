import { Component, OnInit, Input } from '@angular/core';
import { SiteItem } from 'src/app/SiteItem';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: SiteItem;

  constructor() {}

  ngOnInit(): void {}
}
