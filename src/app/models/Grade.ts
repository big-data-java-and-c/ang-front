import {Students} from './students';
import {Teacher} from './Teacher';
import {Subject} from './subject';

export class Grade {
  id_grade: number;
  value_grade: number;
  date_received: string;
  student: Students;
  teacher: Teacher;
  subject: Subject;


  constructor() {
  }
}
