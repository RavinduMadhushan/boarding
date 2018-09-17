import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(private http : HttpClient, private router : Router, private route : ActivatedRoute) { 
    this.invalidLogin = false;
    let m = this.route.snapshot.queryParamMap.get('m');
    if(m){
      this.invalidLogin = true;
      this.message = "You have to login first";
    }
  }


  ngOnInit() {

  }

  signIn(details){

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
      }
    )
  }

}
