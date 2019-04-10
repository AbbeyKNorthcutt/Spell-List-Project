import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListEightComponent } from './spell-list-eight.component';

describe('SpellListEightComponent', () => {
  let component: SpellListEightComponent;
  let fixture: ComponentFixture<SpellListEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
