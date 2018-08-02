import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-favourite-cities',
  //templateUrl: './favourite-cities.component.html',
  template: `
        <b>Top Favourite  Cities</b>
	<ng-template ngFor let-city [ngForOf]= "topCities">
	   <br/>{{city.cityId}} - {{city.cityName}}
	</ng-template>
		
	<br/><b>All Favourite Cities</b>
	<ng-template ngFor let-city [ngForOf]= "allCities">
	   <br/>{{city.cityId}} - {{city.cityName}}
	</ng-template>	
  `,
  styleUrls: ['./favourite-cities.component.css']
})
export class FavouriteCitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren(CityComponent) topCities: QueryList<CityComponent>
  @ContentChildren(CityComponent, { descendants: true }) allCities: QueryList<CityComponent>

}
