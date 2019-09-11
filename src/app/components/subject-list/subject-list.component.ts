import {Component, OnInit} from '@angular/core';
import {Subject} from '../../models/subject';
import {SubjectServiceService} from '../../services/subject-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {tap} from 'rxjs/operators';
import {GradesService} from '../../services/grades.service';
import {Grade} from '../../models/Grade';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SubjectListComponent implements OnInit {
  subjects: Subject[] = [];
  dataSource: any;
  columnsToDisplay = ['name'];
  expandedElement: PeriodicElement | null;
  allStdentsGrades: Grade[];
  studentId: string;
  private PeriodicElement: PeriodicElement = {
    name: '',
    grades: [],
    id: ''
  };


  constructor(
    private subjectService: SubjectServiceService,
    private gradeService: GradesService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // this.studentId = this.route.snapshot.paramMap.get('studentId');
    this.studentId = sessionStorage.getItem('userId');


    this.gradeService.getAllStudentGrades(this.studentId).subscribe(data => {
      this.allStdentsGrades = data;
      this.subjectService.getSubjects()
        .subscribe(innerData => {
            this.dataSource = ELEMENT_DATA;
            this.dataSource = []; // to musi być żeby sie za każdym wejściem w liste przedmiotów nie dodawały nowe
            this.subjects = innerData;
            console.log(innerData);
            this.addSubjectsToView();
            console.log(this.allStdentsGrades[1].value_grade);
          }
        );
    });
  }


  addSubjectsToView() {
    for (let i = 0; i < this.subjects.length; i++) {
      this.dataSource.push({
        name: this.subjects[i].name,
        grades: ['Tu będa oceny #ihope', ' coś innego'],
        // grades: ['Tu będa oceny #ihope', ' coś innego'],
        id: this.subjects[i].id
      });
      console.log(this.dataSource);
    }
  }

}


export interface PeriodicElement {
  name: string;
  grades: string[];
  id: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
