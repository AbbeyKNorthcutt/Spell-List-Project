import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListUmbrellaComponent } from './spell-list-umbrella.component';

describe('SpellListUmbrellaComponent', () => {
  let component: SpellListUmbrellaComponent;
  let fixture: ComponentFixture<SpellListUmbrellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListUmbrellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListUmbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
