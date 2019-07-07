import { CartService } from './../cart.service';
import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items = [];
  reviews = [];
  cart = {};
  constructor(private itemService: ItemService, private cartService: CartService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.cart = this.cartService.getCart();

    this.cartService.getCartStream()
      .subscribe(e => {
        this.cart = e.cart;
      });
  }

}
