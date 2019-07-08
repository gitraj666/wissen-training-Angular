import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http: HttpClient) { }

  items = [
    {
      id: 1,
      name: 'Veg',
      price: 200.00,
      currency: 'INR',
      discount: 30,
      canBuy: true,
      date: Date.now(),
      imgPath: '',
      description: 'veg is always yummy'
    },
    {
      id: 2,
      name: 'Non Veg',
      price: 150.00,
      currency: 'INR',
      canBuy: true,
      date: Date.now(),
      imgPath: '',
      description: 'non-veg is yummy'
    },
  ];
  reviews = [
    [{ author: 'who1@mail.com', stars: 3, body: 'sample-review-1' }],
    [{ author: 'who2@mail.com', stars: 5, body: 'sample-review-1' }]
  ];

  getItems() {
    const apiUrl = 'http://localhost:8191/api/items';
    // console.log(this._http.get(apiUrl));
    return this._http.get(apiUrl);  // async
    // return this.items;
  }

  addReview(id, newReview) {
    this.reviews[--id].push({
      author: newReview.author,
      stars: newReview.stars,
      body: newReview.body
    });
    // console.log(this.reviews);
  }

  getReviews(id) {
    const apiUrl = `http://localhost:8181/api/products/${id}/reviews`;
    return this._http.get(apiUrl); // async
    // return this.reviews[--id];
  }
}
