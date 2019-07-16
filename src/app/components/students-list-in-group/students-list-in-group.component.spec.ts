import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListInGroupComponent } from './students-list-in-group.component';

describe('StudentsListInGroupComponent', () => {
  let component: StudentsListInGroupComponent;
  let fixture: ComponentFixture<StudentsListInGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsListInGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
