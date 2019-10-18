import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  user: firebase.User;

  constructor(public service: LoginService
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe(user =>{
     console.log(user);
     this.user=user; 
    })
  }

  loginGoogle(){
    console.log('login..');
    this.service.login();
  }

  logout(){
    this.service.logout();
  }
  prueba(){
    console.log('prueba mapa')
  }
}
