import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSubjectsListComponent } from './students-subjects-list.component';

describe('StudentsSubjectsListComponent', () => {
  let component: StudentsSubjectsListComponent;
  let fixture: ComponentFixture<StudentsSubjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSubjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSubjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
