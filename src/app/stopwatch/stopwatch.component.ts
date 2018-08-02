import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  //templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  template: '<h2>{{counter}}</h2>'
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  shouldRun: boolean = false;
  counter: number = 0;
  start() {
    this.shouldRun = true;
    let interval = setInterval(() => {
      if (this.shouldRun === false) {
        clearInterval(interval);
      }
      this.counter = this.counter + 1;
    }, 1000);
  }
  stop() {
    this.shouldRun = false;
  }
}
