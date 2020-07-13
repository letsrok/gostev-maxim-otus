import { TestBed } from '@angular/core/testing';

import { WordsService } from './words.service';
import {StorageService} from "./storage.service";
import {Settings} from "./interfaces";
import {of} from "rxjs";


describe('TranslateService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: WordsService;
  let storage: StorageService;

  let wordFrom = 'идти'


  let apiResponse = {
    text: 'идти',
  }

  const storageSet : Settings = {
    translateDirectionFrom: 'en',
    translateDirectionTo: 'to'
  }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    httpClientSpy.get.and.returnValue(of(apiResponse));
    service = new WordsService(<any>httpClientSpy, storage);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should translate word', () => {
    service.getWord(wordFrom, storageSet.translateDirectionFrom, storageSet.translateDirectionTo)
      .subscribe((res) => {
        expect(wordFrom).toEqual(apiResponse.text)
      })
  })
});
