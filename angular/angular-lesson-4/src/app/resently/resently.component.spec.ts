import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentlyComponent } from './resently.component';
import {StorageService} from "../storage.service";
import {WordsService} from "../words.service";
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {words} from "../initialState";
import {HttpClientModule} from "@angular/common/http";
import {Word} from "../interfaces";
import {By} from "@angular/platform-browser";

describe('ResentlyComponent', () => {
  let component: ResentlyComponent;
  let fixture: ComponentFixture<ResentlyComponent>
  let service: WordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResentlyComponent],
      providers: [WordsService, StorageService],
      imports: [HttpClientModule, MatSnackBarModule]
    })

    fixture = TestBed.createComponent(ResentlyComponent);
    service = TestBed.inject(WordsService)
    component = fixture.componentInstance
  })


  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get lastWords on NgOnInit', () => {
    const lastWords:Word[] = words;
    spyOn(service, 'getLastWords').and.returnValue(lastWords)
    fixture.detectChanges()
    expect(component.lastWords).toEqual(lastWords)
  })

  it('should have btn to translate',() => {
    let btn = fixture.debugElement.query(By.css('#btn-translate'));
    expect(btn).toBeDefined();
  })


});
