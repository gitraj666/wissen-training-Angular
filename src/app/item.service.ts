import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

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
    [{ author: 'who1@mail.com', stars: 5, body: 'sample-review-1' }],
    [{ author: 'who2@mail.com', stars: 5, body: 'sample-review-1' }]
  ];

  getItems() {
    return this.items;
  }

  addReview(id, newReview) {
    this.reviews[--id].push({
      author: newReview.author,
      stars: newReview.stars,
      body: newReview.body
    });
    //console.log(this.reviews);
  }

  getReviews(id) {
    return this.reviews[--id];
  }
}
