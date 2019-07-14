import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  roles = ['ADMIN', 'STUDENT', 'TEACHER'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: '',
      password: '',
      displayName: '',
      role: ''
    });

  }

  onSubmit() {

  }
}
