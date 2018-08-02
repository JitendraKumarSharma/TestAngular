import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }
  public name: string = "Jitendra";
  public imageDisplay: string;
  public hello: string = 'Say Hello';
  public MagnetBrains: string = 'Magnet Brains';
  public Magnet: string = 'Magnet';
  public showvalueinput: string = "Jitendra Kumar Sharma";
  ngOnInit() {
    this.imageDisplay = 'https://angular.io/assets/images/logos/angular/angular.svg';
  }

  sayHello() {
    return this.hello = "Say Hi";
  }

  showvalue(event) {
    console.log(event);
  }

  onKeyup(event) {
    console.log(event.target.value);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }

  onKeydown1(event) {
    console.log(event);
  }

}
