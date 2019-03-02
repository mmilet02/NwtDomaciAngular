import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodListComponent } from './proizvod-list.component';

describe('ProizvodListComponent', () => {
  let component: ProizvodListComponent;
  let fixture: ComponentFixture<ProizvodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
