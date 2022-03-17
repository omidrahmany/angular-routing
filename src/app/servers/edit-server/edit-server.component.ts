import {Component, OnInit} from '@angular/core';


import {ServersService} from "../../services/ServersService";
import {ActivatedRoute, Params, Router, UrlTree} from "@angular/router";
import {CanComponentDeactivate} from "../../services/can-deactivate-guard.service";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  // @ts-ignore
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  isAbleToEdit = false;
  changesSaved = false;
  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {}
  // @ts-ignore
  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isAbleToEdit) {
      return true;
    }
    if ((this.server.name !== this.serverName || this.server.status !== this.serverStatus)
      && !this.changesSaved) {
      return confirm("Are you sure you want to discard the changes?");
    } else {
      return true;
    }
  }

  ngOnInit() {
    // @ts-ignore


    this.route.queryParams.subscribe((updatedParam: Params) => {
      this.isAbleToEdit = updatedParam['isAllowedEdit'] !== '0';
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    // @ts-ignore
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id,
      {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
