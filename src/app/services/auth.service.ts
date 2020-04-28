import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

user :User

constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
  this.afAuth.authState.subscribe(user => {
    if (user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
  })
}

async login(email:  string, password:  string) {
  try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigateByUrl('/tweets');
        localStorage.setItem('email',email);
        localStorage.setItem('loggedin','yes')

      })
  } catch (e) {
      if(e.code == 'auth/invalid-email')
        alert('El correo suministrado no es valido. Verifica los datos.');
    }
  }

async logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
    await this.afAuth.auth.signOut();
}

get isLoggedIn(): boolean {
  if(!localStorage.getItem('user')){
    const  user  =  JSON.parse(localStorage.getItem('user'));
  }
  return  localStorage.getItem('loggedin')  == 'yes';
}
}
