import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Groups} from '../models/Groups';
import {environment} from '../../environments/environment';
import {Students} from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentsByGroupId(id: string): Observable<Students[]>{
    return this.http.get<Students[]>(`${environment.backendUrl}/api/student/group/${id}`);
  }
}
