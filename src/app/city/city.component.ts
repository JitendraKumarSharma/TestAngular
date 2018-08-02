import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  template: ``,
  //templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() cityId: string;
  @Input() cityName: string;
}
