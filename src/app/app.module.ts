import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from 'src/app/header-component/header-component.component';
import { SpellBankComponent } from './spell-bank/spell-bank.component';
import { SpellBankCategoriesComponent } from './spell-bank/spell-bank-categories/spell-bank-categories.component';
import { SpellBankExternalComponent } from './spell-bank/spell-bank-external/spell-bank-external.component';
import { SpellBankSearchComponent } from './spell-bank/spell-bank-search/spell-bank-search.component';
import { SpellListsComponent } from './spell-lists/spell-lists.component';
import { SpellListOneComponent } from './spell-lists/spell-list-one/spell-list-one.component';
import { SpellListTwoComponent } from './spell-lists/spell-list-two/spell-list-two.component';
import { SpellListThreeComponent } from './spell-lists/spell-list-three/spell-list-three.component';
import { SpellListFourComponent } from './spell-lists/spell-list-four/spell-list-four.component';
import { SpellListFiveComponent } from './spell-lists/spell-list-five/spell-list-five.component';
import { SpellListSixComponent } from './spell-lists/spell-list-six/spell-list-six.component';
import { SpellListSevenComponent } from './spell-lists/spell-list-seven/spell-list-seven.component';
import { SpellListEightComponent } from './spell-lists/spell-list-eight/spell-list-eight.component';
import { SpellListNineComponent } from './spell-lists/spell-list-nine/spell-list-nine.component';
import { SpellListUmbrellaComponent } from './spell-list-umbrella/spell-list-umbrella.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SpellBankComponent,
    SpellBankCategoriesComponent,
    SpellBankExternalComponent,
    SpellBankSearchComponent,
    SpellListsComponent,
    SpellListOneComponent,
    SpellListTwoComponent,
    SpellListThreeComponent,
    SpellListFourComponent,
    SpellListFiveComponent,
    SpellListSixComponent,
    SpellListSevenComponent,
    SpellListEightComponent,
    SpellListNineComponent,
    SpellListUmbrellaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
