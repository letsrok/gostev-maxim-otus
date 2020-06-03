import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage.service";
import {WordsService} from "../words.service";
import {Word} from "../interfaces";
import {log} from "util";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isGameRun: boolean;
  count: number;
  totalCount: number;
  rightCount: number;
  gameWords: Word[];
  gameTime: number;
  transFrom: string;
  transTo: string;

  wordFrom: string;
  wordTo: string;


  constructor(private settings: StorageService, private words: WordsService) {
    this.isGameRun = false;
  }

  gameStart() {
    this.isGameRun = true;
    this.transFrom = this.settings.getLangFrom();
    this.transTo = this.settings.getLangTo();
    this.count = 0;
    this.rightCount = 0;
    this.totalCount = this.settings.getNumberOfWords();
    this.gameTime = this.settings.getGameTime() * 60;
    this.gameWords = this.words.getWords();
    this.wordFrom = this.gameWords[0][this.transFrom];

    this.gameTimer();
  }

  gameEnd() {
    this.isGameRun = false;
  }

  gameNext() {

    if(this.gameWords[this.count][this.transTo] == this.wordTo) {
      this.rightCount++;
    }

    this.count++;

    if(this.count >= this.totalCount) {
      this.gameEnd();
    }

    this.wordFrom = this.gameWords[this.count][this.transFrom];
    this.wordTo = '';
  }

  gameTimer() {
    let timer = setInterval(() => this.gameTime -= 1 , 1000);
    if(this.gameTime == 0) {
      clearInterval(timer);
      this.gameEnd();
    }

  }

  ngOnInit(): void {
  }

}
