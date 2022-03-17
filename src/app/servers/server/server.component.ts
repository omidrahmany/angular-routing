import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";
import {ServersService} from "../../services/ServersService";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // @ts-ignore
  server: { id: number, name: string, status: string };

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data:Data)=>{
        this.server = data['selectedServer']
      }
    );
    /*const serverId = +this.route.snapshot.params['id'];
    // @ts-ignore
    this.server = this.service.getServer(serverId);
    this.route.params.subscribe((param: Params) => {
        // @ts-ignore
        this.server = this.service.getServer(+param['id']);
      }
    )*/
  }
  onEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling:"preserve"
    })
  }
}
