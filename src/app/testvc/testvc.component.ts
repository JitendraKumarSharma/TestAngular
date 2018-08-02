import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  //templateUrl: './testvc.component.html',
  template: `<h1 (click)="alert()">{{type}}</h1>`,
  styleUrls: ['./testvc.component.css']
})
export class TestvcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message: string;

  @Input() type: string = "success";

  alert() {
    console.log("alert");
  }

}
