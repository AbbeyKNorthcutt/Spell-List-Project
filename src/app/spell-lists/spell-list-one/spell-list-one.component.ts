import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Spells {
  count: number;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}

const apiUrl = 'http://www.dnd5eapi.co/api/spells';

@Component({
  selector: 'app-spell-list-one',
  templateUrl: './spell-list-one.component.html',
  styleUrls: ['./spell-list-one.component.css']
})
export class SpellListOneComponent implements OnInit {

  spellApi: Result[];

  constructor(http: HttpClient) {
    http
      .get<Spells>(apiUrl)
      .subscribe(listOfSpells => {
        console.log(listOfSpells);
        this.spellApi = listOfSpells.results;
      });
}
    ngOnInit() {
    }
  }
