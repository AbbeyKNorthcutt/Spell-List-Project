import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellBankSearchComponent } from './spell-bank-search.component';

describe('SpellBankSearchComponent', () => {
  let component: SpellBankSearchComponent;
  let fixture: ComponentFixture<SpellBankSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellBankSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellBankSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
