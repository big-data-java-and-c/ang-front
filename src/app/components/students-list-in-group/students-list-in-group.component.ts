import { Component, OnInit } from '@angular/core';
import {Students} from '../../models/students';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute} from '@angular/router';
import {GroupsService} from '../../services/groups.service';
import {Groups} from '../../models/Groups';

@Component({
  selector: 'app-students-list-in-group',
  templateUrl: './students-list-in-group.component.html',
  styleUrls: ['./students-list-in-group.component.css']
})
export class StudentsListInGroupComponent implements OnInit {
   students: Students[];
   group: Groups = new Groups();
   groupName: string;
   id: string;
  constructor(
    private studentsService: StudentService,
    private groupsService: GroupsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.studentsService.getStudentsByGroupId(this.id).subscribe(data => this.students = data);
    this.groupsService
    .getGroupById(this.id)
    .subscribe(data => {this.groupName = data.groupName;
  //  console.log(this.group.groupName);
    });
  }

}
