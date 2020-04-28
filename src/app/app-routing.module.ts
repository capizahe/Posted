import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import {AuthGuard} from './auth.guard'
import { UserTweetsComponent } from './components/user-tweets/user-tweets.component';


const routes: Routes = [
  { path: '#' , component:LoginComponent, pathMatch: 'full'},
  { path: 'tweets', component: TweetListComponent, canActivate:[AuthGuard]},
  { path: 'create', component: CreateTweetComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegistroComponent},
  { path: 'myposts', component: UserTweetsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
