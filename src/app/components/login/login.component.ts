import { ResponseFromDB } from './../../models/response';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  response: ResponseFromDB;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

    ngOnInit() {
      localStorage.clear();
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

  onSubmit() {
    if(this.loginForm.invalid){
        return;
    }

    this.loading = true;
    sessionStorage.setItem('currentUserEmail', this.loginForm.controls.email.value);

    console.log('dziala');
  }

}
