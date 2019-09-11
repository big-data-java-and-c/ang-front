import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute} from '@angular/router';
import {Students} from '../../models/students';
import {Groups} from '../../models/Groups';
import {GroupsService} from '../../services/groups.service';

@Component({
  selector: 'app-update-student-group',
  templateUrl: './update-student-group.component.html',
  styleUrls: ['./update-student-group.component.css']
})
export class UpdateStudentGroupComponent implements OnInit {
  studentId: string;
  student: Students;
  groups: Groups[];
  selectedValue: number;
  selected = 1;


  constructor(
    private studentsService: StudentService,
    private groupsService: GroupsService,
    private route: ActivatedRoute
  ) {
    this.student = new Students(),
      this.groups = [];
  }

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('studentId');
    this.studentsService.getStudentByStudentId(this.studentId).subscribe(
      data => {
        this.student = data;
        console.log(this.student.displayName);
      }
    );

    this.groupsService.getGroups().subscribe(
      data => {
        this.groups = data;
        console.log(data);
      }
    );

  }


  saveGroup(id: number) {
    console.log('studnet = ' + this.student.id + 'wybrana grupa' + this.selectedValue);
    this.studentsService.updateStudentGroup(this.student.id, this.selectedValue).subscribe();

  }
}
