import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
card: Card[] = Card [ new Card('Meneur', 'Le meneur définit la composition de la partie et tire les cartes événements. Il est le maître des joueurs qui sont à sa merci.', 'https://cdn.discordapp.com/attachments/671802972329607198/758312826321895445/image0.jpg')]
  constructor() { }

  ngOnInit() {
  }

}