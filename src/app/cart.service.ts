import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Map();
  cartQty = 0;
  cartStream: Subject<any> = new Subject();

  constructor() { }

  getCart() {
    // console.log(this.cart);
    return this.cart;
  }

  getCartStream() {
    return this.cartStream;
  }

  addToCart(item, qty) {
    const { id } = item;
    let tempItem: Array<any>;
    // console.log(this.cart);
    // console.log(item);
    if (this.cart.has(id)) {
      item['qty'] = item['qty'] + qty;
      this.cart.set(id, item);
      // console.log(this.cart);
    } else {
      tempItem = item;
      tempItem['qty'] = qty;
      this.cart.set(id, tempItem);
    }
    this.publishToStream(this.cart);
  }

  publishToStream(cart) {
    this.cart = cart;
    this.cartQty = cart.size;
    this.cartStream.next({ cartQty: this.cartQty, cart: cart });
  }
}
