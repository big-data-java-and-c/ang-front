import { AuthenticationService } from './../../services/authentication.service';
import { ResponseFromDB } from './../../models/response';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorage } from 'src/app/helpers/token.storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  res: ResponseFromDB;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private token: TokenStorage,
    private toaster: ToastrService
    ) { }

    ngOnInit() {
      localStorage.clear();
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    }

    onSubmit() {

      if (this.loginForm.invalid) {
        return;
      }

      this.loading = true;
      sessionStorage.setItem('currentUserEmail', this.loginForm.controls.email.value);
      this.authenticationService
        .loginClient(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
        .toPromise()
        .then(data => {
          this.toaster.success('Witamy uzytkowniku');
          this.token.saveToken(data.response.token);
          this.res = data;
          sessionStorage.setItem('userId', this.res.userId.toString());
          sessionStorage.setItem('roleId', this.res.roleId.toString());

          this.router.navigate([this.returnUrl]);
        })
        .catch(e => {
          this.loading = false;
          console.log("error");
          this.toaster.error('bad credentials');
        });
    }
  }
