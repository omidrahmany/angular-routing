import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  // @ts-ignore
  errorMessage: string;
  // @ts-ignore
  errorCode: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // let msg = this.route.snapshot.data['msg'];
    this.route.data.subscribe(
      (data:Data)=>{
        this.errorMessage = data['msg'];
        this.errorCode = data['code'];
      }
    )
  }
}
