import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Spells {
  _id: string;
  index: number;
  name: string;
  desc: string;
  level: number;
  url: string;
}

const apiUrl = 'https://raw.githubusercontent.com/adrpadua/5e-database/master/5e-SRD-Spells.json';

@Component({
  selector: 'app-spell-bank-external',
  templateUrl: './spell-bank-external.component.html',
  styleUrls: ['./spell-bank-external.component.css'],
})

export class SpellBankExternalComponent implements OnInit {

  spellApi: Spells;

  onSelect($event) {
    console.log('Checkbox functional!', $event);
  }

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
