import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GradesService} from '../../services/grades.service';
import {SubjectServiceService} from '../../services/subject-service.service';
import {Subject} from '../../models/subject';
import {Grade} from '../../models/Grade';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Students} from '../../models/students';

@Component({
  selector: 'app-student-grades-of-subject',
  templateUrl: './student-grades-of-subject.component.html',
  styleUrls: ['./student-grades-of-subject.component.css']
})
export class StudentGradesOfSubjectComponent implements OnInit {
  private studentId: string;
  private subjectId: string;
  // private grades: number[];
  private grades: Grade[];
  private subjects: Subject[];
  private subjectName: string;
  transferFormGroup: FormGroup;
  private gradeToSend: Grade;

  // newGrade:

  constructor(
    private route: ActivatedRoute,
    private gradesService: GradesService,
    private subjectService: SubjectServiceService,
    private fb: FormBuilder,
  ) {
  }


  // private getSubject() {
  //   for (let i = 0; i < this.subjects.length; i++) {
  //     if (this.subjects[i][0] === this.subjectId) {
  //       this.subjectName = this.subjects[i][1];
  //     }
  //   }
  // }

  ngOnInit() {
    this.gradeToSend = new Grade();
    this.gradeToSend.subject = new Subject();
    this.gradeToSend.student = new Students();
    this.grades = [];
    this.subjectId = this.route.snapshot.paramMap.get('subjectId');
    this.studentId = this.route.snapshot.paramMap.get('studentId');
    // this.gradesService.getgetGradesValueBySubjaectIdAndStudentId(this.subjectId, this.studentId).subscribe(data => this.grades = data);
    this.gradesService.getgetGradesBySubjaectIdAndStudentId(this.subjectId, this.studentId).subscribe(data => this.grades = data);
    this.subjectService.getSubjects().subscribe(data => this.subjects = data);
    this.transferFormGroup = this.fb.group({
      newGrade: ''
    });
  }


  deleteGrade(id_grade: number) {
    this.gradesService.deleteGradeById(id_grade).subscribe();
    this.grades[id_grade - 1] = null;
    this.grades = this.grades.filter(item => item.id_grade != id_grade);

    this.gradesService.getgetGradesBySubjaectIdAndStudentId(this.subjectId, this.studentId).subscribe(data => this.grades = data);
    this.ngOnInit();
    console.log(id_grade);
  }

  onSubmit() {
    this.gradeToSend.value_grade = this.transferFormGroup.value.newGrade;
    this.gradeToSend.subject.id = parseInt(this.subjectId, 10);
    this.gradeToSend.student.id = parseInt(this.studentId, 10);
    console.log(this.gradeToSend.value_grade);
    console.log(this.gradeToSend.subject.id);
    this.gradesService.addNewGrade(this.gradeToSend).subscribe();
    this.ngOnInit();
  }
}
