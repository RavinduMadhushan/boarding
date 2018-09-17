import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService  : AuthServiceService, private router : Router) {  }

  canActivate(route , state : RouterStateSnapshot){
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'],{queryParams : { m : "auth"}});
  }
}
