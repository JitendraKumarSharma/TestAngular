import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestvcComponent } from './testvc.component';

describe('TestvcComponent', () => {
  let component: TestvcComponent;
  let fixture: ComponentFixture<TestvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
