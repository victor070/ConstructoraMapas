import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  login(){
    console.log('redirecccionango');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.auth.signOut();

  }

  getLoggedInUser(){
    return this.afAuth.authState;  
  }
}
