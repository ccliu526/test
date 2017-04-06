import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login-t.component.html',
  styleUrls: ['./login-t.component.css']
})
export class LoginTComponent implements OnInit {

  submitted: boolean;
  account = "";
  password = "";

  ngOnInit() {

  }

   save() {
        this.submitted = true;
     
  }
}
