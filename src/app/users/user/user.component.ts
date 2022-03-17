import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // @ts-ignore
  selectedUser: { id: number; name: string; };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedUser = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe((updatedParam: Params) => {
        this.selectedUser.id = updatedParam['id'];
        this.selectedUser.name = updatedParam['name'];
      });
  }

}
