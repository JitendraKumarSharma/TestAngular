import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { CpColorDirective } from '../cp-color.directive';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.component.html',
  styleUrls: ['./ui-element.component.css']
})
export class UiElementComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild(NumberComponent)
  private numberComponent: NumberComponent;
  @ViewChild(StopwatchComponent)
  private stopwatchComponent: StopwatchComponent;
  @ViewChild(CpColorDirective)
  private cpColorDirective: CpColorDirective;
  @ViewChild('title')
  private elTitle: ElementRef;

  ngAfterViewInit() {
    this.elTitle.nativeElement.style.backgroundColor = 'cyan';
    this.elTitle.nativeElement.style.color = 'red';
  }
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }
  startStopwatch() {
    this.stopwatchComponent.start();
  }
  stopStopwatch() {
    this.stopwatchComponent.stop();
  }
  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }

}
