import { Injectable } from '@angular/core';
import {Settings} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  settings: Settings

  constructor() {
    if(localStorage.getItem('gameTime')) {
      this.settings = {
        gameTime: +localStorage.getItem('gameTime'),
        numberOfWords: +localStorage.getItem('numberOfWords'),
        translateDirectionFrom: localStorage.getItem('translateDirectionFrom'),
        translateDirectionTo: localStorage.getItem('translateDirectionTo')
      }
    }
    else {
      this.setGameTime(1);
      this.setNumberOfWords(1);
      this.setTranslateDirectionFrom('en');
      this.setTranslateDirectionTo('ru');
    }
  }

  getGameTime() {
    return this.settings.gameTime
  }

  getNumberOfWords() {
    return this.settings.numberOfWords
  }

  getLangFrom() {
    return this.settings.translateDirectionFrom
  }

  getLangTo() {
    return this.settings.translateDirectionTo
  }

  setGameTime(data: number) {
    localStorage.setItem('gameTime', data.toString());
    this.settings = {...this.settings, gameTime: data}
  }

  setNumberOfWords(data: number) {
    localStorage.setItem('numberOfWords', data.toString());
    this.settings = {...this.settings, numberOfWords: data}
    console.log('done')
  }

  setTranslateDirectionFrom(data: string) {
    localStorage.setItem('translateDirectionFrom', data);
    this.settings = {...this.settings, translateDirectionFrom: data}
  }

  setTranslateDirectionTo(data: string) {
    localStorage.setItem('translateDirectionTo', data);
    this.settings = {...this.settings, translateDirectionTo: data}
  }
}
