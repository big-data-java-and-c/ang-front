import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groups } from '../models/Groups';
import { environment } from '../../environments/environment';
import { Students } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(`${environment.backendUrl}/api/student`);
  }

  getStudentsByGroupId(id: string): Observable<Students[]> {
    return this.http.get<Students[]>(`${environment.backendUrl}/api/student/group/${id}`);
  }

  getStudentIdByUserId(userId: string) {
    //to do studentidbyuserid
    return this.http.get<number>(`${environment.backendUrl}/api/student/studentidbyuserid/${userId}`);
  }

  getStudentByStudentId(studentId: number): Observable<Students> {
    // to do
    return this.http.get<Students>(`${environment.backendUrl}/api/student/studentbystudentid/${studentId}`);
  }

  getStudentByUserId(userId: string): Observable<Students> {
    // to do
    return this.http.get<Students>(`${environment.backendUrl}/api/student/studentbyuserid/${userId}`);
  }

  save(student: Students): Observable<Object> {
    console.log(student);
    // http://localhost:8081/api/student/add
    return this.http.put<Object>('http://localhost:8081/api/student/add', student);
  }
}
