import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;
  message = "";
  constructor(private http : HttpClient, private router : Router) { 

  }


  ngOnInit() {

  }

  signIn(details){
    //this.http.post("")
    console.log(details);

    this.http.post("http://localhost:3000/api/auth/login",details).subscribe(
      (res)=> {
        let response = JSON.stringify(res);
        let token = JSON.parse(response).token;
        localStorage.setItem("token", token);
        this.router.navigate(["/"]);
      },
      (error) => {
        
        this.invalidLogin = true;
        this.message = error.error;
        console.log(error);
      }
    )
  }

}
