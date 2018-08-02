import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppparentComponent } from './appparent.component';

describe('AppparentComponent', () => {
  let component: AppparentComponent;
  let fixture: ComponentFixture<AppparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
