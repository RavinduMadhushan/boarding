import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  get currentUser(){
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");

    if (!token) {
      return null;
    }
    return helper.decodeToken(token);
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

  isAdmin() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");

    if (!token) {
      return false;
    }
    else {
      let details = helper.decodeToken(token);
      return details.isAdmin;
    }

  }

}
