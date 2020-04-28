import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user:User = new User();

  constructor(private router:Router,private userService:UserService,private authService:AuthService) { }

   addUser(){
    this.userService.addUser(this.user);
    this.resetReg()
     }

  ngOnInit() {
    this.userService.getUsers()
  }
  
  resetReg(){
    this.router.navigateByUrl('/login');
  }

}
 