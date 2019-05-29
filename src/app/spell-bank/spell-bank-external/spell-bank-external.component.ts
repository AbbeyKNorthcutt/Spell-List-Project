import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Spells {
  _id: string;
  index: number;
  name: string;
  desc: string;
  higher_level: string;
  level: number;
  url: string;
}

const apiUrl = 'https://raw.githubusercontent.com/adrpadua/5e-database/master/5e-SRD-Spells.json';

@Component({
  selector: 'app-spell-bank-external',
  templateUrl: './spell-bank-external.component.html',
  styleUrls: ['./spell-bank-external.component.css']
})

export class SpellBankExternalComponent implements OnInit {

  spellApi: Spells;

  constructor(http: HttpClient) {
    http
      .get<Spells>(apiUrl)
      .subscribe(listOfSpells => {
        console.log(listOfSpells);
        this.spellApi = listOfSpells;
      });
   }

  ngOnInit() {

  }

}
