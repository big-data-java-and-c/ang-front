import {Students} from './students';
import {Teacher} from './Teacher';
import {Subject} from './subject';

export class Grade {
  id: number;
  value_grade: number;
  date_received: string
  subjectId: number;
  subject: Subject;
  teacherId: number
  teacher: Teacher;
  studentId: number;
  student: Students;




  constructor() {
  }
}
