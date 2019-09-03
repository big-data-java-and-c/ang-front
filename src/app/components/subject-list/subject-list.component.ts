import { SubjectServiceService } from './../../services/subject-service.service';
import { Subject } from './../../models/subject';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  @Input() subjectId: any;

  subjects: Subject[];
  constructor(private subjectService: SubjectServiceService) { }

  ngOnInit() {

    this.subjectService.getSubjects()
    .toPromise()
    .then( data => {
      this.subjects = data;
      console.log(data);
    })
    .catch(e => {
      console.log(e);
      console.log('err already in use');
    });





  }

}
