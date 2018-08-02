import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestvcParentComponent } from './testvc-parent.component';

describe('TestvcParentComponent', () => {
  let component: TestvcParentComponent;
  let fixture: ComponentFixture<TestvcParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestvcParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestvcParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
