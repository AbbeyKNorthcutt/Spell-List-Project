import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantripListComponent } from './cantrip-list.component';

describe('CantripListComponent', () => {
  let component: CantripListComponent;
  let fixture: ComponentFixture<CantripListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantripListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
