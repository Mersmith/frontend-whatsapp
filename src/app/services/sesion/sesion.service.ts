import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private isAuthenticated = false;
  private userData: any = null;

  constructor() { }

  setAuthenticated(authenticated: boolean) {
    this.isAuthenticated = authenticated;
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }

  setUserData(data: any) {
    this.userData = data;
    if(data){
      this.setAuthenticated(true);
    }
  }

  getUserData() {
    return this.userData;
  }
  
}
