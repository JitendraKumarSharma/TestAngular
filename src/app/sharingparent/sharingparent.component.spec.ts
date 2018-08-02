import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingparentComponent } from './sharingparent.component';

describe('SharingparentComponent', () => {
  let component: SharingparentComponent;
  let fixture: ComponentFixture<SharingparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
