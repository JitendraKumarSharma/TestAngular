import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appchild',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // handleclick() {
  //   console.log('hey I am  clicked in child');
  // }

  @Output() valueChange = new EventEmitter();

  counter = 0;
  valueChanged() { // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

  @Output() toggleForm = new EventEmitter<boolean>();


  backToList(): void {
    debugger
    this.toggleForm.emit();
  }

}
