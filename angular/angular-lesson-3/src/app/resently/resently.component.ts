import { Component, OnInit } from '@angular/core';
import {WordsService} from '../words.service';
import {Word} from "../interfaces";
import {StorageService} from "../storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-resently',
  templateUrl: './resently.component.html',
  styleUrls: ['./resently.component.scss']
})
export class ResentlyComponent implements OnInit {
  lastWords: Word[];
  isFetch: boolean;
  isCanAddWord: boolean;
  transFrom: string;
  transTo: string;
  wordToTranslate: string;
  wordFromTranslate: string;

  constructor(private translate: WordsService, private settings: StorageService, private snackBar: MatSnackBar) {
    this.wordToTranslate = '';
    this.wordFromTranslate = '';
  }

  addWord() {
    this.translate.addWord(this.wordToTranslate, this.wordFromTranslate);
    this.isCanAddWord = false;
    this.lastWords = this.translate.getLastWords();
  }

  translateWord() {
    this.transFrom = this.settings.getLangFrom();
    this.transTo = this.settings.getLangTo();

    this.translate.getWord(this.wordToTranslate, this.transFrom, this.transTo)
      .subscribe(data => {this.wordFromTranslate = data.text[0]; this.isFetch = true;},
      error => {
        this.snackBar.open(error.message, '', {duration: 500});
        this.isFetch = false;
        this.isCanAddWord = false;},
      () => {
        this.snackBar.open('Translation complete', '', {duration: 500});
        this.isFetch = false;
        this.isCanAddWord = true;
      });
  }


  ngOnInit(): void {

    this.lastWords = this.translate.getLastWords();

   }
}
