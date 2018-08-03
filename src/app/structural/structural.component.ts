import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  public displayName = false;
  public color = "pink";
  public colors=['red','green','blue','yellow'];
  ngOnInit() {
  }

}
