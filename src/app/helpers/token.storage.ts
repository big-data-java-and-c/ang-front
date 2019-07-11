import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

  constructor(private router: Router) { }

  signOut() {
    sessionStorage.clear();
  }

  public saveToken(token: string) {
    sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
