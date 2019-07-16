import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Groups} from '../models/Groups';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor(private http: HttpClient) { }

  getGroups(): Observable<Groups[]> {
    return this.http.get<Groups[]>(`${environment.backendUrl}/api/groups/all`);

  }
}
