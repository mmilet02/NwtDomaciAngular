import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcjenaComponent } from './ocjena.component';

describe('OcjenaComponent', () => {
  let component: OcjenaComponent;
  let fixture: ComponentFixture<OcjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
