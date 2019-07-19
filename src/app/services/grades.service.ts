import {Subject} from './../models/subject';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from './../../environments/environment';
import {Grade} from '../models/Grade';


@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private http: HttpClient) {
  }

  userId: number;

  getGrades(id: number): Observable<number[]> {
    console.log('userId -> ');
    console.log(sessionStorage.getItem('userId'));
    return this.http.get<number[]>(`${environment.backendUrl}/api/grade/grades/${id}/student/${sessionStorage.getItem('userId')}`);
  }
  getAllStudentGrades(studentId: string){
    return this.http.get<Grade[]>(`${environment.backendUrl}/api/grade/all/${studentId}`);
  }

  getgetGradesValueBySubjaectIdAndStudentId(subjectId: string, studentId: string) {
    return this.http.get<number[]>(`${environment.backendUrl}/api/grade/grades/${subjectId}/student/${studentId}`);
  }

  getgetGradesBySubjaectIdAndStudentId(subjectId: string, studentId: string) {
    return this.http.get<Grade[]>(`${environment.backendUrl}/api/grade/subject/${subjectId}/student/${studentId}`);
  }
}
