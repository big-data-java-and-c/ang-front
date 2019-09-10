import { Component, OnInit } from '@angular/core';
import { Students } from './../../models/students';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  student: Students = new Students();

  userId: string;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.studentService.getStudentByUserId(this.userId).subscribe(
      data => {
        this.student = data;
      });
  }

  onSubmit() {
    console.log("dziala");
    this.studentService.save(this.student).subscribe(data => { console.log('working');});
  }
}
