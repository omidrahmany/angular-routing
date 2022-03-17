import {Component, OnInit} from '@angular/core';
import {ServersService} from "../services/ServersService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onLoadPage() {
    this.router.navigate(["servers"])

  }

}
