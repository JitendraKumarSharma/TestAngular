import { Component, OnInit, ViewChildren, QueryList, ViewChild, ElementRef } from '@angular/core';
import { TestvcComponent } from '../../app/testvc/testvc.component';
import { createViewChild } from '@angular/compiler/src/core';

@Component({
  selector: 'app-testvc-parent',
  templateUrl: './testvc-parent.component.html',
  styleUrls: ['./testvc-parent.component.css'],
})
export class TestvcParentComponent implements OnInit {

  constructor(private elRef: ElementRef) { }
  public type1: string = "hello";
  ngOnInit() {

  }

  @ViewChildren(TestvcComponent) alerts: QueryList<TestvcComponent>;
  @ViewChild("name") name: ElementRef;
  @ViewChildren("name") name1: QueryList<ElementRef>;

  ngAfterViewInit() {
    debugger
    console.log("First Item : " + this.alerts.first.type);
    console.log("Last Item : " + this.alerts.last.type);
    console.log("Total Item : " + this.alerts.filter(x => x.type == "success"));

    console.log("Using ViewChild : "+this.name.nativeElement.innerHTML);
    console.log("Using ViewChild : "+this.name.nativeElement.innerText);
    console.log("Using ViewChild : "+this.name.nativeElement.firstChild.data);
    console.log("Using ViewChild : "+this.name.nativeElement.lastChild.data);
    this.name1.forEach(element => {
      console.log("Using ViewChildren : "+element.nativeElement.firstChild.data);
    });
    this.alerts.forEach(
      alertInstance => {
        if (alertInstance.type == "success") {
          console.log("Success");
        }
        console.log(alertInstance)
      }
    );
  }
}
