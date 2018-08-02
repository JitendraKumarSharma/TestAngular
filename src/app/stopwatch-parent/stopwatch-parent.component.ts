import { Component, OnInit, ViewChild } from '@angular/core';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-stopwatch-parent',
  templateUrl: './stopwatch-parent.component.html',
  styleUrls: ['./stopwatch-parent.component.css']
})
export class StopwatchParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(StopwatchComponent)
  private stopwatchComponent: StopwatchComponent;
  startStopwatch() {
    this.stopwatchComponent.start();
  }
  stopStopwatch() {
    this.stopwatchComponent.stop();
  }
}
