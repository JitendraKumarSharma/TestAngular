import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h3>
      You selected employee with id = {{empid}}
      </h3>
      <p>
      <button (click)=showOverview()>Overview</button>
      <button (click)=showContact()>Contact</button>
      </p>
      <router-outlet></router-outlet>
      <br/>
      
      <a class="hover" (click)="goPrevious()">Previous</a>
      <a class="hover" (click)="goNext()">Next</a>
    <div>
    <button (click)=gotoEmployees()>Back</button>
    </div>
  `,
  styles: [
    `
    .hover{
cursor:pointer;
    }
    `
  ]
})
export class EmployeeDetailComponent implements OnInit {

  public empid;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //  When we are navigating from one component back to the same component the snapshot approach will not work
    //  Because Angular is going to figure out if it needs to initialize a new component or it can resue the same component,
    //  When we navigate back to the same component angulr simply resues the same component no initialization implies
    //  that the ngOnInit method does not get called and hence the new id will never be reterive from the url, 
    //  so to overcome this we use paramMap Observable

    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.empid = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.empid = id;
    })

  }

  goPrevious() {
    let prvid = this.empid - 1;
    this.router.navigate(['/employee', prvid]);
  }

  goNext() {
    let nextid = this.empid + 1;
    this.router.navigate(['/employee', nextid]);
  }

  gotoEmployees() {
    let selectedid = this.empid ? this.empid : null;
    //this.router.navigate(['/employee', { id: selectedid, test:'testvalue' }]);
    this.router.navigate(['../', { id: selectedid }], { relativeTo: this.route });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
