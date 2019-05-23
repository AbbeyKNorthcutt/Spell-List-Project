import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Spells {
  name: string;
  url: string;
  email: string;
}

const apiUrl = 'http://www.dnd5eapi.co/api/spells';

@Component({
  selector: 'app-spell-list-one',
  templateUrl: './spell-list-one.component.html',
  styleUrls: ['./spell-list-one.component.css']
})
export class SpellListOneComponent implements OnInit {

  spellApi: Spells[] = [];

  constructor(http: HttpClient) {
     http
      .get<Spells[]>(apiUrl)
      .subscribe(listOfSpells => {
          console.log(listOfSpells);
          this.spellApi = listOfSpells;
       });
}
    ngOnInit() {
    }
  }
