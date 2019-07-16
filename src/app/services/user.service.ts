import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './../models/user';
import {environment} from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User) {
    return this.http.post(`${environment.backendUrl}/api/auth/signup`, user);
  }
}
