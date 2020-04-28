import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from 'src/app/model/tweet';
import { DatePipe } from '@angular/common';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet:any
  
  constructor(private datePipe: DatePipe, public tweetService:TweetsService) { 
  }

  ngOnInit() {
  }

  getInfo(){
    console.log(this.tweet)
  }

  removeTweet($key){
    this.tweetService.deleteTweet($key);
  }

  isOwner(correo:string){
    return correo == localStorage.getItem('email')
  }

}
