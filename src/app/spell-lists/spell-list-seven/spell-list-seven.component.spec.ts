import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListSevenComponent } from './spell-list-seven.component';

describe('SpellListSevenComponent', () => {
  let component: SpellListSevenComponent;
  let fixture: ComponentFixture<SpellListSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
