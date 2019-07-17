import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradesOfSubjectComponent } from './student-grades-of-subject.component';

describe('StudentGradesOfSubjectComponent', () => {
  let component: StudentGradesOfSubjectComponent;
  let fixture: ComponentFixture<StudentGradesOfSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGradesOfSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGradesOfSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
