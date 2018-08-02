import { Component, OnInit, ViewChild } from '@angular/core';
import { CpColorDirective } from '../cp-color.directive';

@Component({
  selector: 'app-cpcolor-parent',
  templateUrl: './cpcolor-parent.component.html',
  styleUrls: ['./cpcolor-parent.component.css']
})
export class CpcolorParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(CpColorDirective)
  private cpColorDirective: CpColorDirective;

  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }
}
