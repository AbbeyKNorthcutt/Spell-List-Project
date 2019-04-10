import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListNineComponent } from './spell-list-nine.component';

describe('SpellListNineComponent', () => {
  let component: SpellListNineComponent;
  let fixture: ComponentFixture<SpellListNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
