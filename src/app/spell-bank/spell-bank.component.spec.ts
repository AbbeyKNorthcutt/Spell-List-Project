import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellBankComponent } from './spell-bank.component';

describe('SpellBankComponent', () => {
  let component: SpellBankComponent;
  let fixture: ComponentFixture<SpellBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
