import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradesService } from 'src/app/services/grades.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class GradesComponent implements OnInit {
  id: any;
  grades: number[];
  avgGrades: number;
  columnsToDisplay = ['name'];
  constructor(private gradesService: GradesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gradesService.getGrades(this.id).subscribe(data => {
      this.grades = data.map(e => e.value_grade);
      this.avgGrades = this.grades.reduce((p, c) => c += p);
      this.avgGrades = this.avgGrades / this.grades.length;
    });
  }

}
