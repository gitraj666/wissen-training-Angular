import { ItemService } from './../item.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import words from 'profane-words';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  @Input() id;
  reviewForm: FormGroup;
  // filter = new Filter();
  constructor(private fb: FormBuilder, private itemService: ItemService, private router: Router) {
  }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      author: ['', [Validators.required]],
      stars: [''],
      body: ['', [Validators.maxLength(45)]]
    });
  }

  addUserReview() {
    // console.log("form submitted..");
    let newBody = '';
    const tokens = this.reviewForm.value.body.split(' ');
    tokens.forEach(token => {
      if (words.includes(token)) {
        newBody += '***';
      } else {
        newBody += token;
      }
    });
    this.reviewForm.value.body = newBody;
    this.itemService.addReview(this.id, this.reviewForm.value);
    this.router.navigate(['/items']);
  }

}
