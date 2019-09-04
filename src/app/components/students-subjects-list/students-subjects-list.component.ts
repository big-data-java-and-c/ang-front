import {Component, OnInit} from '@angular/core';
import {Subject} from '../../models/subject';
import {SubjectServiceService} from '../../services/subject-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {tap} from 'rxjs/operators';
import {GradesService} from '../../services/grades.service';
import {Grade} from '../../models/Grade';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-students-subjects-list',
  templateUrl: './students-subjects-list.component.html',
  styleUrls: ['./students-subjects-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class StudentsSubjectsListComponent implements OnInit {
  subjects: Subject[] = [];
  dataSource: any;
  columnsToDisplay = ['name'];
  expandedElement: PeriodicElement | null;
  allStdentsGrades: Grade[];
  studentId: string;
  private PeriodicElement: PeriodicElement = {
    name: '',
    grades: [],
    id: ''
  };


  constructor(
    private subjectService: SubjectServiceService,
    private gradeService: GradesService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('studentId');

    this.gradeService.getAllStudentGrades(this.studentId).subscribe(data => {
      this.allStdentsGrades = data;
      this.subjectService.getSubjects()
        .subscribe(innerData => {
            this.dataSource = ELEMENT_DATA;
            this.dataSource = []; // to musi być żeby sie za każdym wejściem w liste przedmiotów nie dodawały nowe
            this.subjects = innerData;
            console.log(innerData);
            this.addSubjectsToView();
            console.log(this.allStdentsGrades[1].value_grade);
          }
        );
    });
  }


  addSubjectsToView() {
    for (let i = 0; i < this.subjects.length; i++) {
      this.dataSource.push({
        name: this.subjects[i].name,
        grades: ['Tu będa oceny #ihope', ' coś innego'],
        // grades: ['Tu będa oceny #ihope', ' coś innego'],
        id: this.subjects[i].id
      });
      console.log(this.dataSource);
    }
  }

}


export interface PeriodicElement {
  name: string;
  grades: string[];
  id: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
//   {
//     name: 'Hydrogen',
//     grades: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   }, {
//     name: 'Helium',
//     grades: `Helium is a chemical element with symbol He and atomic number 2. It is a
//         colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
//         group in the periodic table. Its boiling point is the lowest among all the elements.`
//   }, {
//     name: 'Lithium',
//     grades: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
//         silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
//         lightest solid element.`
//   }, {
//     name: 'Beryllium',
//     grades: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
//         relatively rare element in the universe, usually occurring as a product of the spallation of
//         larger atomic nuclei that have collided with cosmic rays.`
//   }, {
//     name: 'Boron',
//     grades: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
//         by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
//         low-abundance element in the Solar system and in the Earth's crust.`
//   }, {
//     name: 'Carbon',
//     grades: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
//         and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
//         to group 14 of the periodic table.`
//   }, {
//     name: 'Nitrogen',
//     grades: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
//         discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
//   }, {
//     name: 'Oxygen',
//     grades: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
//          the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
//          agent that readily forms oxides with most elements as well as with other compounds.`
//   }, {
//     name: 'Fluorine',
//     grades: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
//         lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
//         conditions.`
//   }, {
//     name: 'Neon',
//     grades: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
//         Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
//         two-thirds the density of air.`
//   },
// ];
