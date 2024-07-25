import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'createdDate', 'enabled'];
  dataSource: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.dataSource = data;
    });
  }
}
