import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from 'src/app/header-component/header-component.component';
import { SpellBankComponent } from './spell-bank/spell-bank.component';
import { SpellBankExternalComponent } from './spell-bank/spell-bank-external/spell-bank-external.component';
import { SpellListsComponent } from './spell-lists/spell-lists.component';
import { SpellListOneComponent } from './spell-lists/spell-list-one/spell-list-one.component';
import { OverviewComponentComponent } from './overview-component/overview-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SpellBankComponent,
    SpellBankExternalComponent,
    SpellListsComponent,
    SpellListOneComponent,
    OverviewComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
