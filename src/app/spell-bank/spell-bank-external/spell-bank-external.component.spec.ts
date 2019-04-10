import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellBankExternalComponent } from './spell-bank-external.component';

describe('SpellBankExternalComponent', () => {
  let component: SpellBankExternalComponent;
  let fixture: ComponentFixture<SpellBankExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellBankExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellBankExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
