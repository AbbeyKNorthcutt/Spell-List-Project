import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListSixComponent } from './spell-list-six.component';

describe('SpellListSixComponent', () => {
  let component: SpellListSixComponent;
  let fixture: ComponentFixture<SpellListSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
