import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { GameComponent } from './game.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {WordsService} from "../words.service";
import {StorageService} from "../storage.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {By} from "@angular/platform-browser";


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let service: WordsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [WordsService, StorageService],
      imports: [HttpClientModule]
    })

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have btn to start game', () => {
    let btn = fixture.debugElement.query(By.css('#game-start'));
    expect(btn).toBeDefined();
  })

  it('should start game on press btn', () => {
    let btn = fixture.debugElement.query(By.css('#game-start'));
    btn.triggerEventHandler('click', null);
    expect(component.isGameRun).toBeTrue()
  })

});
