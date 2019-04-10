import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListTwoComponent } from './spell-list-two.component';

describe('SpellListTwoComponent', () => {
  let component: SpellListTwoComponent;
  let fixture: ComponentFixture<SpellListTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
