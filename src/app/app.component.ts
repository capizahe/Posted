import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posted';

  constructor(private authService: AuthService, private router:Router){}
  
  signedIn():Boolean{
    
    if(this.authService.isLoggedIn) return true;
    return false;
  }

  logout(){
    this.authService.logout()
  }
}
