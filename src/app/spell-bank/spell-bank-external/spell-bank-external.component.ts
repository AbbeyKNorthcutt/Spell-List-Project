import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://www.dnd5eapi.co/api/spells';

interface Spells {
  name: string;
  url: string;
}

@Component({
  selector: 'app-spell-bank-external',
  templateUrl: './spell-bank-external.component.html',
  styleUrls: ['./spell-bank-external.component.css']
})

export class SpellBankExternalComponent implements OnInit {

  spellApi = [
    {spell: 'Acid Arrow', spellurl: 'http://www.dnd5eapi.co/api/spells/1'},
    {spell: 'Acid Splash', spellurl: 'http://www.dnd5eapi.co/api/spells/2'},
    {spell: 'Aid', spellurl: 'http://www.dnd5eapi.co/api/spells/3'},
    {spell: 'Alarm', spellurl: 'http://www.dnd5eapi.co/api/spells/4'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
