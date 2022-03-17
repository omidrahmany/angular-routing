import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: "omid"
    },
    {
      id: 2,
      name: "gisoo"
    },
    {
      id: 3,
      name: "kosar"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
