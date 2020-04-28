import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string
  password:string
  
  constructor(private  authService:  AuthService,private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  onCreateAccount(){
    this.router.navigateByUrl('/signup');
  }

  onLogin(){
    this.authService.login(this.email,this.password);
  }

}
