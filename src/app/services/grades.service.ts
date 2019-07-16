import { Subject } from './../models/subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private http: HttpClient) { }

  getGrades(): Observable<number[]> {
    return this.http.get<number[]>(`${environment.backendUrl}/api/grade/grades/1/student/1`);
  }
}
