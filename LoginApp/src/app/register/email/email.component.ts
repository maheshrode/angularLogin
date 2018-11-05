import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onContinueEmail(){
    this.router.navigate(['/Register/username'])
  }

  onPreviousEmail(){
    this.router.navigate(['/Register/home'])
  }

}
