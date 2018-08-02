import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingchildComponent } from './sharingchild.component';

describe('SharingchildComponent', () => {
  let component: SharingchildComponent;
  let fixture: ComponentFixture<SharingchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
