import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model';
import {ReviewModel} from '../review-model';
import {Md5} from 'ts-md5/dist/md5';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    @Input()
    reviewsGem: GemModel;
    newReview: ReviewModel;

  constructor(private avatarService: AvatarService) { }

  ngOnInit() {
      this.wipeReview();
  }
   wipeReview() {
      this.newReview = {
          id: -1,
          createddate: '',
          body: '',
          rating: 5,
          author: ''
      };
  }
    submitClicked(reviewForm) {
        this.reviewsGem.reviews.push(this.newReview);
        this.wipeReview();
        reviewForm.reset();
    }
    generateAvatarUrl(email: string) {
        return 'https://2.gravatar.com/avatar/' + Md5.hashStr(email);
    }

}
