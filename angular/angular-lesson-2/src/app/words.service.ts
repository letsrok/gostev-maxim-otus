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
    if(JSON.parse(localStorage.getItem('words')).length > 0) {
      this.words = JSON.parse(localStorage.getItem('words'))
    }
    else {
      this.words = words;
      localStorage.setItem('words', JSON.stringify(words))
      console.log(2)
    }
  }

  getWord(text, dirForm, dirTo) {
    const request = `${environment.API_HOST}?key=${environment.API_KEY}&text=${text}&lang=${dirForm}-${dirTo}`;
    return this.http.get<ApiResponse>(request, { responseType: 'json' });
  }

  getLastWords () {
    let res = this.words.sort((a, b) => a.date > b.date ? 1 : -1);
    res = res.slice(res.length - 10, res.length);
    return res;
  }

  addWord(word, wordTranslate) {
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
