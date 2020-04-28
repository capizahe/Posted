import { Component, OnInit } from '@angular/core';
import {TweetsService} from '../../services/tweets.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {

  
  constructor(public tweetService:TweetsService, public userService:UserService, private router:Router) { }

  addPost(){
    this.tweetService.insertTweet(this.tweetService.selectedTweet);
    this.router.navigate(['/tweets']);

  }

  ngOnInit() {
    this.tweetService.getTweets();
  }

}
