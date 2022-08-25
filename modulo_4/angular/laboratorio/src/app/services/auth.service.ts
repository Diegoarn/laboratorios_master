import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUsername: string = '';
  constructor() {}

  public login(username: string, password: string) {
    let result: boolean = false;
    this.logout();
    if (username === 'master@lemoncode.net' && password === '12345678') {
      result = true;
      this.loginUsername = username;
    } else {
      alert('User not valid');
    }

    return result;
  }

  public logout() {
    this.loginUsername = '';
  }

  public getUsername() {
    return this.loginUsername;
  }
}
