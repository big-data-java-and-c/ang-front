import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GradesService} from '../../services/grades.service';
import {SubjectServiceService} from '../../services/subject-service.service';
import {Subject} from '../../models/subject';
import {Grade} from '../../models/Grade';

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

  constructor(
    private route: ActivatedRoute,
    private gradesService: GradesService,
    private subjectService: SubjectServiceService
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
    this.grades = [];
    this.subjectId = this.route.snapshot.paramMap.get('subjectId');
    this.studentId = this.route.snapshot.paramMap.get('studentId');
    // this.gradesService.getgetGradesValueBySubjaectIdAndStudentId(this.subjectId, this.studentId).subscribe(data => this.grades = data);
    this.gradesService.getgetGradesBySubjaectIdAndStudentId(this.subjectId, this.studentId).subscribe(data => this.grades = data);
    this.subjectService.getSubjects().subscribe(data => this.subjects = data);
  }


  deleteGrade(id_grade: number){
    this.gradesService.deleteGradeById(id_grade).subscribe();
    console.log(id_grade);
  }
}
