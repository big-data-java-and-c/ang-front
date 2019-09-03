import { Component, OnInit } from '@angular/core';
import {Groups} from '../../models/Groups';
import {GroupsService} from '../../services/groups.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
   groups: Groups[];
   roleId: number;
  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groupsService.getGroups().subscribe(data => this.groups = data);
    this.roleId = +sessionStorage.getItem('roleId');
  }

}
