import { Subject } from './../models/subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<any> {
    return this.http.get<Subject>(`${environment.backendUrl}/api/subjects`);
  }
}
