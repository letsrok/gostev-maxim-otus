import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient} from '@angular/common/http';
import {ApiResponse, Word} from "./interfaces";
import {StorageService} from "./storage.service";
import {words} from "./initialState";


@Injectable({
  providedIn: 'root'
})

export class WordsService {
  words: Word[];

  constructor(private http: HttpClient, private storage: StorageService) {

  }

  getAllWords() {
    if(JSON.parse(localStorage.getItem('words')).length > 0) {
      this.words = JSON.parse(localStorage.getItem('words'))
    }
    else {
    this.words = words;
    localStorage.setItem('words', JSON.stringify(words))
    }
  }

  getWord(text, dirForm, dirTo) {
    const request = `${environment.API_HOST}?key=${environment.API_KEY}&text=${text}&lang=${dirForm}-${dirTo}`;
    return this.http.get<ApiResponse>(request, { responseType: 'json' });
  }

  getWords():Word[] {
    this.getAllWords();
    const res = [];
    const count = this.storage.getNumberOfWords();

    for (let i = 0; i < count; i++ ) {
      let word = (Math.floor(Math.random() * this.words.length));
      res.push(this.words[word]);
    }

    return res;
  }

  getLastWords () {
    this.getAllWords();
    let res = this.words.sort((a, b) => a.date > b.date ? 1 : -1);
    res = res.slice(0, 10);
    return res;
  }

  addWord(word, wordTranslate) {
    this.getAllWords();
    let transFrom = this.storage.getLangFrom();
    let transTo = this.storage.getLangTo();
    const newWord: Word = {
      date: new Date().toDateString(),
      [transFrom]: word,
      [transTo]: wordTranslate
    }
    this.words = [...this.words, newWord]
    localStorage.setItem('words', JSON.stringify(this.words))
  }

}
