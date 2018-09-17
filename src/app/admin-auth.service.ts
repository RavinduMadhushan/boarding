import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate {

  constructor(private authService : AuthServiceService, private router : Router) { 
    
  }

  canActivate(){
    if (this.authService.isAdmin()) return true;

    this.router.navigate(['/no-access']);
    return false;
  }


}
