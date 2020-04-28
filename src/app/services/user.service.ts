import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { CryptoService } from './crypto.service';
import { AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from  "@angular/fire/auth";
import * as firebase from 'firebase';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserList : AngularFireList<any>;
  selectedUser: User = new User();


  constructor(private crypto:CryptoService, private datePipe:DatePipe,private firebase:AngularFireDatabase,private angularAuth:AngularFireAuth, private router:Router) {}

  getUsers(){
    return this.UserList = this.firebase.list('users')
  }
 async addUser(user:User){
   try{
    await this.angularAuth.auth.createUserWithEmailAndPassword(user.email,user.contrasena)
    .then(() =>{
      alert("Registro satisfactorio");
      user.username = user.email.split('@')[0];
      this.selectedUser.email = user.email;
      user.fecha_creacion = new Date();
      this.UserList.push({
        nombre: user.nombre,
        apellido: user.apellido,
        fecha_creacion: this.datePipe.transform(user.fecha_creacion,'dd/MM/yyyy'),
        email: user.email,
        username: user.username,
      });
    }).catch((e)=>{
      if(e.code == 'auth/email-already-in-use')
        alert('El email ya se encuentra en uso');
      if(e.code == 'auth/weak-password')
        alert('La contraseña es muy debil');
      if(e.code == 'auth/timeout')
        alert('Tiempo de espera agotado');
    })
} catch(e){ 
  console.log(e)
}
  }

  getInfoByEmail():User{
    let user:User;
    if(localStorage.getItem('email')!=null){
      user = new User();

      let email = localStorage.getItem('email')
      let db = firebase.database()
      
      let ref = db.ref('users')
      ref.orderByChild('email').equalTo(email).on('child_added',function(snapshot){
        user.nombre = snapshot.val().nombre  
        user.apellido = snapshot.val().apellido  
        user.email = snapshot.val().email  
        user.username = snapshot.val().username  
        user.fecha_creacion = snapshot.val().fecha_creacion
        return user;
         });
    }
    return user;

  }

}
