import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellBankCategoriesComponent } from './spell-bank-categories.component';

describe('SpellBankCategoriesComponent', () => {
  let component: SpellBankCategoriesComponent;
  let fixture: ComponentFixture<SpellBankCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellBankCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellBankCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
