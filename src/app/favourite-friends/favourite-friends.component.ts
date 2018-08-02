import { Component, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-favourite-friends',
  //templateUrl: './favourite-friends.component.html',
  template: `
	<b>All Favourite Friends</b>
	<br/> {{allFriends}}	
  `,
  styleUrls: ['./favourite-friends.component.css']
})
export class FavouriteFriendsComponent implements AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren('name') allFriendsRef: QueryList<ElementRef>;

  get allFriends(): string {
    return this.allFriendsRef ? this.allFriendsRef.map(f => f.nativeElement.innerHTML).join(', ') : '';
  }

  ngAfterContentInit() {
    console.log(this.allFriends);
  }
}
