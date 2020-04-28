import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';

//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import  {FormsModule} from '@angular/forms'
import { AngularFireAuthModule } from "@angular/fire/auth";

//services
import {TweetsService} from './services/tweets.service';
import { LoginComponent } from './components/login/login.component';

import { DatePipe } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { UserComponent } from './components/user/user.component';
import {AuthGuard} from './auth.guard';
import { UserTweetsComponent } from './components/user-tweets/user-tweets.component'


@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetListComponent,
    CreateTweetComponent,
    LoginComponent,
    RegistroComponent,
    UserComponent,
    UserTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [TweetsService,DatePipe,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
