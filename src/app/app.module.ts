import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { StopwatchParentComponent } from './stopwatch-parent/stopwatch-parent.component';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { CpcolorParentComponent } from './cpcolor-parent/cpcolor-parent.component';
import { CpColorDirective } from './cp-color.directive';
import { CpthemeComponent } from './cptheme/cptheme.component';
import { UiElementComponent } from './ui-element/ui-element.component';
import { AppchildComponent } from './appchild/appchild.component';
import { AppparentComponent } from './appparent/appparent.component';
import { TestvcComponent } from './testvc/testvc.component';
import { TestvcParentComponent } from './testvc-parent/testvc-parent.component';
import { BookDirective } from './book.directive';
import { WriterComponent } from './writer/writer.component';
import { PersonComponent } from './person/person.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { CityComponent } from './city/city.component';
import { AddressComponent } from './address/address.component';
import { FavouriteCitiesComponent } from './favourite-cities/favourite-cities.component';
import { FriendComponent } from './friend/friend.component';
import { FavouriteFriendsComponent } from './favourite-friends/favourite-friends.component';
import { BindingsComponent } from './bindings/bindings.component';
import { SharingchildComponent } from './sharingchild/sharingchild.component';
import { SharingparentComponent } from './sharingparent/sharingparent.component';
import { StructuralComponent } from './structural/structural.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberParentComponent,
    StopwatchComponent,
    StopwatchParentComponent,
    CpcolorParentComponent,
    CpColorDirective,
    CpthemeComponent,
    UiElementComponent,
    AppchildComponent,
    AppparentComponent,
    TestvcComponent,
    TestvcParentComponent,
    BookDirective,
    WriterComponent,
    PersonComponent,
    FavouriteBooksComponent,
    CityComponent,
    AddressComponent,
    FavouriteCitiesComponent,
    FriendComponent,
    FavouriteFriendsComponent,
    BindingsComponent,
    SharingchildComponent,
    SharingparentComponent,
    StructuralComponent,
    PipesComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule,
    RouterModule.forRoot([
      {
        path: 'number',
        component: NumberParentComponent
      }
    ]),
    routing,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
