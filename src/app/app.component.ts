import { Component, OnInit} from '@angular/core';
import {AngularFireAuth}from'@angular/fire/auth';
import { LoginService } from './componentes/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: firebase.User;

constructor(
  public afAuth: AngularFireAuth,
  public loginservice: LoginService
){}

ngOnInit(){
  this.afAuth.authState
  .subscribe(user =>{
    console.log(user);
    this.user = user;
  })
}

logout(){
console.log("salir")
this.afAuth.auth.signOut();
}


}
