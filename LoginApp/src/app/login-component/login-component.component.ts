import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  onLoadLogin(){
    this.router.navigate(['/welcome-component'])
  }
  onRegister(){
    this.router.navigate(['/Register'])
  }

  OnSubmit(){
    this.onLoadLogin();
  }
}
