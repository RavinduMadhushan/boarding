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

  constructor(private http: HttpClient) { }
  model;
  ngOnInit() {
  }

  signup(details) {

    let registerDetails = {
      name: details.fn,
      email: details.email,
      address: details.address,
      city: details.city,
      phn: details.number,
      pass: details.pass

    };

    console.log(registerDetails);

    this.http.post('http://localhost:1234/auth/registerUser', registerDetails).subscribe((res)=> {
      console.log(res);
    })

  }

}
