import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { GradesComponent } from './components/grades/grades.component';
import {GroupsListComponent} from './components/groups-list/groups-list.component';
import {StudentsListInGroupComponent} from './components/students-list-in-group/students-list-in-group.component';
import {StudentsSubjectsListComponent} from './components/students-subjects-list/students-subjects-list.component';
import {StudentGradesOfSubjectComponent} from './components/student-grades-of-subject/student-grades-of-subject.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'subjectlist', component: SubjectListComponent },
  { path: 'grades/:id', component: GradesComponent },
  { path: 'groupsList', component: GroupsListComponent },
  { path: 'groupsList/group/:id', component: StudentsListInGroupComponent },
  { path: 'groupsList/group/:id/studentSubjects/:studentId', component: StudentsSubjectsListComponent },
  { path: 'groupsList/group/:id/studentSubjects/:studentId/ofSubject/:subjectId', component: StudentGradesOfSubjectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
