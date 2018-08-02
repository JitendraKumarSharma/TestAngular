import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  latestBook = true;
  onChangeBook() {
    this.latestBook = (this.latestBook === true) ? false : true;
  }

  showAllBook = false;
  onShowAllBooks() {
    this.showAllBook = (this.showAllBook === true) ? false : true;
  }

  homeTown = true;
  onChangeCity() {
    this.homeTown = (this.homeTown === true) ? false : true;
  }

  showAllCity = false;
  onShowAllCities() {
    this.showAllCity = (this.showAllCity === true) ? false : true;
  }

  bestFriend = true;
  onChangeFriend() {
    this.bestFriend = (this.bestFriend === true) ? false : true;
  }

  showAllFriend = false;
  onShowAllFriends() {
    this.showAllFriend = (this.showAllFriend === true) ? false : true;
  }
}
