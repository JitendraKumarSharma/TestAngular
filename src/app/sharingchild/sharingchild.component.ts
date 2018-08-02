import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sharingchild',
  templateUrl: './sharingchild.component.html',
  styleUrls: ['./sharingchild.component.css']
})
export class SharingchildComponent implements OnInit {

  @Input() greetMessage: string;

  _name: string;
  constructor() { }

  ngOnInit() {
    this.dispMsg();
  }

  dispMsg() {
    //alert(this.greetMessage);
  }

  @Input()
  set Name(name: string) {
    debugger
    this._name = (name && name.trim()) || "I am default name";
  }
  get Name() {
    debugger
    return this._name;
  }

}
