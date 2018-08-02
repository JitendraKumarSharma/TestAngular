import { Component, OnInit } from '@angular/core';
import { SharingchildComponent } from '../sharingchild/sharingchild.component';

@Component({
  selector: 'app-sharingparent',
  templateUrl: './sharingparent.component.html',
  styleUrls: ['./sharingparent.component.css']
})
export class SharingparentComponent implements OnInit {

  message: string = "I am Parent";
  childmessage: string = "I am passed from Parent to child component"
  childNameArray = ['foo','koo',' ','moo','too','hoo',''];
  constructor() { }

  ngOnInit() {

  }

  
}
