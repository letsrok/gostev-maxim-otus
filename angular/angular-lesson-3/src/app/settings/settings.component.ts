import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  gameTime: number;
  numberOfWords: number;
  translateDirectionFrom: string;
  translateDirectionTo: string;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.gameTime = this.storage.getGameTime();
    this.numberOfWords = this.storage.getNumberOfWords();
    this.translateDirectionFrom = this.storage.getLangFrom();
    this.translateDirectionTo = this.storage.getLangTo();
  }

  changeGameTime() {
    this.storage.setGameTime(this.gameTime)
  }

  changeNumberOfWords() {
    this.storage.setNumberOfWords(this.numberOfWords)
  }
  changeLangDirectionFrom() {
    this.storage.setTranslateDirectionFrom(this.translateDirectionFrom);
  }
  changeLangDirectionTo() {
    this.storage.setTranslateDirectionTo(this.translateDirectionTo);
  }

}
