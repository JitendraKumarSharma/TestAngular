import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appparent',
  templateUrl: './appparent.component.html',
  styleUrls: ['./appparent.component.css']
})
export class AppparentComponent implements OnInit {

  public loading = false;
  public showForm = false;
  
  constructor() { }

  ngOnInit() {
  }

  displayCounter(count) {
    console.log(count);
  }

  toggleForm(loading) {
    debugger
    this.showForm = !loading;
    return !this.showForm;
  }
}
