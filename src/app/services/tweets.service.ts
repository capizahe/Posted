import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Tweet } from '../model/tweet';
import { DatePipe } from '@angular/common';
import { UserService } from './user.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  TweetList : AngularFireList<any>
  user = new User()
  selectedTweet: Tweet = new Tweet();
  constructor(private firebase:AngularFireDatabase, private datepipe:DatePipe,private userService:UserService) {
    let user = new User()
    user.nombre = localStorage.getItem('nombre');
    user.email = localStorage.getItem('email');
    user.apellido = localStorage.getItem('apellido');
    this.selectedTweet.autor = user;
   }

  getTweets(){
    this.TweetList = this.firebase.list('tweets');
    return this.TweetList;
  }

  getTweetsByUser(email:string):AngularFireList<any>{
   return this.firebase.list  ("tweets",query=>{ return query.orderByChild('correo').equalTo(email);})
  }

  deleteTweet(key:string){
    this.firebase.object('/tweets/'+key).remove()
  }

  insertTweet(tweet:Tweet){
    this.selectedTweet.fecha = new Date();
    this.TweetList.push({
      descripcion: tweet.descripcion,
      fecha: this.datepipe.transform(this.selectedTweet.fecha,'dd/MM/yyyy hh:mm'),
      correo: this.selectedTweet.autor.email
    })
    
  }
}
