import {GroupsService} from './../../services/groups.service';
import {Groups} from './../../models/Groups';
import {StudentService} from './../../services/student.service';
import {Students} from './../../models/students';
import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UpdateGroupDto} from './updateGroupDto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Students[];
  groups: Groups[];
  studentsToUpdate: UpdateGroupDto[];

  constructor(
    private studentsService: StudentService,
    private groupsService: GroupsService,
    private router: Router
  ) {
  }

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

  edit(studentId: number) {
    console.log(studentId)
    this.router.navigate(['/update-student-group/', studentId]);
  }


}
