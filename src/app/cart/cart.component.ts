import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = new Map();
  cartItems = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItems = [];
    // let keys = this.cart.keys();
    this.cart.forEach((item) => this.cartItems.push(item));
    // console.log(this.cart);

    this.cartService.getCartStream()
      .subscribe(e => {
        const { cart } = e;
        this.cart = cart;
        this.cartItems = [];
        this.cart.forEach(item => this.cartItems.push(item));
      });
  }

  incOrDecQty(item, qty) {
    this.cartService.addToCart(item, qty);
  }
}
