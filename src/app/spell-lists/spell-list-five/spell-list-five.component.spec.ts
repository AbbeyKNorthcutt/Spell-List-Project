import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListFiveComponent } from './spell-list-five.component';

describe('SpellListFiveComponent', () => {
  let component: SpellListFiveComponent;
  let fixture: ComponentFixture<SpellListFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
