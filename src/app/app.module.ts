import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from 'src/app/header-component/header-component.component';
import { SpellBankComponent } from './spell-bank/spell-bank.component';
import { SpellBankExternalComponent } from './spell-bank/spell-bank-external/spell-bank-external.component';
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
import { OverviewComponentComponent } from './overview-component/overview-component.component';
import { CantripListComponent } from './spell-lists/cantrip-list/cantrip-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SpellBankComponent,
    SpellBankExternalComponent,
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
    SpellListUmbrellaComponent,
    OverviewComponentComponent,
    CantripListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
