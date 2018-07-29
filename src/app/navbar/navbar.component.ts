import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthServiceService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("token");
  }

  isLoggedIn(){
    
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");

    if (!token) {
      return false;
    }
    let islogged = !helper.isTokenExpired(token);
    return islogged;
  }

}
