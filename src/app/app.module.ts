import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { RouterModule } from '@angular/router';
import { CpColorDirective } from './cp-color.directive';
import { AppchildComponent } from './appchild/appchild.component';
import { TestvcComponent } from './testvc/testvc.component';
import { BookDirective } from './book.directive';
import { WriterComponent } from './writer/writer.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { CityComponent } from './city/city.component';
import { AddressComponent } from './address/address.component';
import { FavouriteCitiesComponent } from './favourite-cities/favourite-cities.component';
import { FriendComponent } from './friend/friend.component';
import { FavouriteFriendsComponent } from './favourite-friends/favourite-friends.component';
import { SharingchildComponent } from './sharingchild/sharingchild.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { routing, routingComponents } from './app.routing';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    StopwatchComponent,
    CpColorDirective,
    AppchildComponent,
    TestvcComponent,
    BookDirective,
    WriterComponent,
    FavouriteBooksComponent,
    CityComponent,
    AddressComponent,
    FavouriteCitiesComponent,
    FriendComponent,
    FavouriteFriendsComponent,
    SharingchildComponent,
    routingComponents,
    EmployeeOverviewComponent,
    EmployeeContactComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    routing,
    HttpClientModule,
    ChartsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
