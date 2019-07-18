import {Component, OnInit} from '@angular/core';
import {Subject} from '../../models/subject';
import {SubjectServiceService} from '../../services/subject-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {tap} from 'rxjs/operators';

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
  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = ['name'];
  expandedElement: PeriodicElement | null;
  private PeriodicElement: PeriodicElement = {
    name: '',
    description: []
  };


  constructor(private subjectService: SubjectServiceService) {
  }

  ngOnInit() {
    this.subjectService.getSubjects()
      .subscribe(data => {
          this.dataSource = ELEMENT_DATA;
          this.subjects = data;
          console.log(this.subjects.length);
          this.addSubjectsToView();
        }
      )
    ;

  }

  addSubjectsToView() {
    for (let i = 0; i < this.subjects.length; i++) {
      this.dataSource.push({name: this.subjects[i][1], description: ['Tu będa oceny #ihope', ' coś innego']});
      console.log(this.dataSource);
    }
  }

}


export interface PeriodicElement {
  name: string;
  description: string[];
}

const ELEMENT_DATA: PeriodicElement[] = [];
//   {
//     name: 'Hydrogen',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   }, {
//     name: 'Helium',
//     description: `Helium is a chemical element with symbol He and atomic number 2. It is a
//         colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
//         group in the periodic table. Its boiling point is the lowest among all the elements.`
//   }, {
//     name: 'Lithium',
//     description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
//         silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
//         lightest solid element.`
//   }, {
//     name: 'Beryllium',
//     description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
//         relatively rare element in the universe, usually occurring as a product of the spallation of
//         larger atomic nuclei that have collided with cosmic rays.`
//   }, {
//     name: 'Boron',
//     description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
//         by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
//         low-abundance element in the Solar system and in the Earth's crust.`
//   }, {
//     name: 'Carbon',
//     description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
//         and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
//         to group 14 of the periodic table.`
//   }, {
//     name: 'Nitrogen',
//     description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
//         discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
//   }, {
//     name: 'Oxygen',
//     description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
//          the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
//          agent that readily forms oxides with most elements as well as with other compounds.`
//   }, {
//     name: 'Fluorine',
//     description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
//         lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
//         conditions.`
//   }, {
//     name: 'Neon',
//     description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
//         Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
//         two-thirds the density of air.`
//   },
// ];
