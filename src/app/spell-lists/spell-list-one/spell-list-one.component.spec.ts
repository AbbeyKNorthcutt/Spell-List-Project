import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListOneComponent } from './spell-list-one.component';

describe('SpellListOneComponent', () => {
  let component: SpellListOneComponent;
  let fixture: ComponentFixture<SpellListOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
