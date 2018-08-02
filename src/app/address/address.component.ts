import { Component, OnInit, ContentChild } from '@angular/core';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-address',
  //templateUrl: './address.component.html',
  template: `
        <b>{{title}}</b>
	<br/>City: {{city?.cityId}} - {{city?.cityName}} 
  `,
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChild(CityComponent) city: CityComponent;
  title = 'Address';
}
