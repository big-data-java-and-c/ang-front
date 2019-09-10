import { GroupsService } from './../../services/groups.service';
import { Groups } from './../../models/Groups';
import { StudentService } from './../../services/student.service';
import { Students } from './../../models/students';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Students[];
  groups: Groups[];
  constructor(private studentsService: StudentService,
    private groupsService: GroupsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(
      data => {
        this.students = data;
      }
    );
    this.groupsService.getGroups().subscribe(
      data => {
        this.groups = data;
        console.log(data);
      }
    );

  }

}
