import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { User } from './../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isSubmited = false;
  registerForm: FormGroup;
  roles = ['STUDENT', 'TEACHER'];

  constructor(private fb: FormBuilder,
    private toastrS: ToastrService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required, Validators.pattern[('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required, Validators.minLength(8)],
      displayName: ['', Validators.maxLength(20)],
      role: 'STUDENT'
    });
  }

  onSubmit() {

    this.isSubmited = true;
    if (this.registerForm.invalid) {
      console.log('invalid form registry');
      return;
    }
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {

      console.log(this.registerForm.value.password);
      console.log(this.registerForm.value.confirmPassword);
      console.log('password dont match');
      return;
    }

    const temporarryUser: User = new User(this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.displayName,
      this.registerForm.value.role,
    );
    console.log(temporarryUser);
    this.userService.register(temporarryUser)
      .toPromise()
      .then(sukces => {
        console.log(sukces);
        console.log('succesfully registratio n');
      })
      .catch(e => {
        console.log(e);
        console.log('err already in use');
      });
  }
}

