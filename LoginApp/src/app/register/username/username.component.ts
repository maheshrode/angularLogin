import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPreviousUsername(){
this.router.navigate(['/Register/email'])
  }

  
}
