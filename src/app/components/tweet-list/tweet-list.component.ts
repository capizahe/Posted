import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/model/tweet';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  public tweets:Tweet[];

  constructor(public tweetService:TweetsService) { }

  ngOnInit() {
    this.tweetService.getTweets()
    .snapshotChanges()
    .subscribe(tweets=>{
      this.tweets = new Array(tweets.length);
      let i = tweets.length-1;
      tweets.forEach(tweet=>{
        var t = tweet.payload.toJSON()
        t["$key"] = tweet.key;
        this.tweets[i] = (t as Tweet);
        i--;
      }) 
    })
  }
  
}
