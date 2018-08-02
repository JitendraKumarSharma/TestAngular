import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  //templateUrl: './friend.component.html',
  template: `
	Friend Name: {{friendName}}
  `,
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements AfterContentInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ContentChild('name') nameRef: ElementRef;

  get friendName(): String {
    return this.nameRef.nativeElement.innerHTML;
  }

  ngAfterContentInit() {
    console.log(this.friendName);
  }

}
