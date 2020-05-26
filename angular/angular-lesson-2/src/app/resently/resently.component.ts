import { Component, OnInit } from '@angular/core';
import {WordsService} from '../words.service';
import {Word} from "../interfaces";

@Component({
  selector: 'app-resently',
  templateUrl: './resently.component.html',
  styleUrls: ['./resently.component.scss']
})
export class ResentlyComponent implements OnInit {
  lastWords: Word[];
  isFetch: boolean;

  constructor(private translate: WordsService) { }

  wordTranslate: string

  ngOnInit(): void {

    this.translate.getWord('presently, name, address, fire, go, some, work, present, egg, master, help', 'en', 'ru')
      .subscribe(data => {this.wordTranslate = data.text[0]; this.isFetch = true},
        error => {console.log(error.message); this.isFetch = false},
        () => {console.log('translation complete'); this.isFetch = false});

    this.lastWords = this.translate.getLastWords();
    console.log(this.lastWords)
   }

}
