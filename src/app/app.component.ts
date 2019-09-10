import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jibrus-front';
  private userId: string;
  private roleId: number;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.userId = sessionStorage.getItem('userId');
    this.roleId = +sessionStorage.getItem('roleId');
  }

  goToEdit() {
    this.router.navigate(['user-form/' + this.userId]);
  }

  logout() {
    this.router.navigate(['/']);
    sessionStorage.clear();
    location.reload();
  }

}
