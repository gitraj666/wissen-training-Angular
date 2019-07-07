import { CartService } from './../cart.service';
import { ItemService } from './../item.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  currentTab = 1;
  @Input() item;
  reviews = [];
  @Input() cartQty;
  constructor(private itemService: ItemService, private cartService: CartService) { }

  ngOnInit() {
  }

  handleBuy() {
    this.cartService.addToCart(this.item, 1);
  }

  changeTab(tabIndex) {
    this.currentTab = tabIndex;
    if (tabIndex === 3) {
      this.reviews = this.itemService.getReviews(this.item.id);
    }
  }

  isTabSelected(id) {
    return this.currentTab === id;
  }
}
