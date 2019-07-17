import {Component, OnInit} from '@angular/core';
import {Subject} from '../../models/subject';
import {SubjectServiceService} from '../../services/subject-service.service';

@Component({
  selector: 'app-students-subjects-list',
  templateUrl: './students-subjects-list.component.html',
  styleUrls: ['./students-subjects-list.component.css']
})
export class StudentsSubjectsListComponent implements OnInit {
  subjects: Subject[];

  constructor(private subjectService: SubjectServiceService) {
  }

  ngOnInit() {
    this.subjectService.getSubjects()
      .toPromise()
      .then(data => {
        this.subjects = data;
      })
      .catch(e => {
        console.log(e);
        console.log('err already in use');
      });
  }

}
