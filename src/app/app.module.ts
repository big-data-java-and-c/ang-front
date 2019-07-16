import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenStorage } from 'src/app/helpers/token.storage';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { GradesComponent } from './components/grades/grades.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { StudentsListInGroupComponent } from './components/students-list-in-group/students-list-in-group.component';





@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    SubjectListComponent,
    GradesComponent
    GroupsListComponent,
    StudentsListInGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [    TokenStorage  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
