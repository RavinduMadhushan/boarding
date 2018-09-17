import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/register.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  model;
  ngOnInit() {
  }

  error = false;
  errormessage = "";
  signup(details) {

    let registerDetails = {
      name: details.fn,
      email: details.email,
      address: details.address,
      city: details.city,
      phonenumber: details.number,
      password: details.pass

    };

    this.http.post('http://localhost:3000/api/users/register', registerDetails, { observe: 'response' }).subscribe((res) => {
      this.router.navigate(["/login"]);
    },
      (err) => {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 5000);
        this.errormessage = err.error;
      });

  }

}
