import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OGHSComponent } from './oghs.component';

describe('OGHSComponent', () => {
  let component: OGHSComponent;
  let fixture: ComponentFixture<OGHSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OGHSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OGHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
