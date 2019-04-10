import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListsComponent } from './spell-lists.component';

describe('SpellListsComponent', () => {
  let component: SpellListsComponent;
  let fixture: ComponentFixture<SpellListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
