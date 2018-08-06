import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [`
  .item li.selected{
    background-color: #CFD8DC;
    color: white;
  }
  `]
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public selectedid;
  public value: string;
  public errorMsg: string;
  constructor(private _employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this._employeeService.getEmployee()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error.statusText);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      let val = params.get('test');
      this.selectedid = id;
      this.value = val;
    })
  }

  onSelect(emp) {
    //this.router.navigate(['/employee', emp.id]);
    this.router.navigate([emp.id], { relativeTo: this.route });
  }

  isSelected(emp) {
    return emp.id === this.selectedid;
  }
}
