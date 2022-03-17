import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService:AuthService) {}

  login(){
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

  onLoadServers() {
    this.router.navigate(["/servers"]);
  }

  onLoadParametersServer(id: number) {
    this.router.navigate(
      ["/servers", id, 'edit'],
      {queryParams: {'mode': 'editing', 'No': 9658},
        fragment:'features'
      }
      );  }


}
