import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Spells {
  name: string;
  url: string;
}

const apiUrl = 'http://www.dnd5eapi.co/api/spells';

@Component({
  selector: 'app-spell-bank-external',
  templateUrl: './spell-bank-external.component.html',
  styleUrls: ['./spell-bank-external.component.css']
})

export class SpellBankExternalComponent implements OnInit {

  spellApi: Spells[] = [];

  constructor(http: HttpClient) {
    http
      .get<Spells[]>(apiUrl)
      .subscribe(listOfSpells => {
        console.log(listOfSpells);
        this.spellApi = listOfSpells.results;
      });
   }

  ngOnInit() {

  }

}
