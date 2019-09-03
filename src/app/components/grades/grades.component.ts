import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradesService } from 'src/app/services/grades.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  id: any;
  grades: number[];
  constructor(private gradesService: GradesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gradesService.getGrades(this.id).subscribe(data => {this.grades = data
    console.log(data)
    });
    console.log(this.grades);
  }

}
