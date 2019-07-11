import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorage } from '../helpers/token.storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private token: TokenStorage) { }

  public isAuthenticated(): boolean {
    const token = this.token.getToken();
    return token != null;
  }

  loginClient(email: string, password: string) {
    return this.http.post<any>(`${environment.backendUrl}/api/auth/signin`, { email, password });
  }


  logout() {
    this.token.signOut();
  }
}
