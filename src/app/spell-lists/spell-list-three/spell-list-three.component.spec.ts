import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListThreeComponent } from './spell-list-three.component';

describe('SpellListThreeComponent', () => {
  let component: SpellListThreeComponent;
  let fixture: ComponentFixture<SpellListThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
