import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListFourComponent } from './spell-list-four.component';

describe('SpellListFourComponent', () => {
  let component: SpellListFourComponent;
  let fixture: ComponentFixture<SpellListFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
