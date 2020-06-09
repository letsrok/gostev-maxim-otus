import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import {StorageService} from "../storage.service";
import {By} from "@angular/platform-browser";

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [StorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have btn`s to change Lang From Translate',() => {
    let btnLangForm = fixture.debugElement.query(By.css('#lang-from'));
    expect(btnLangForm).toBeDefined();
  })

  it('should have btn`s to change Lang To Translate ', () => {
    let btnLangTo = fixture.debugElement.query(By.css('#lang-To'));
    expect(btnLangTo).toBeDefined();
  })

  it('should have btn`s to change Numbers of Words ', () => {
    let selectNumberOfWords = fixture.debugElement.query(By.css('#numbers-of-words'));
    expect(selectNumberOfWords).toBeDefined();
  })

  it('should have btn`s to change Game Time ', () => {
    let gameTimeBtn = fixture.debugElement.query(By.css('#game-time'));
    expect(gameTimeBtn).toBeDefined();
  })

  it('should show warning if Lang to translate = lang from translate', () => {
    component.translateDirectionFrom = 'ru'
    component.translateDirectionTo = 'ru'
    fixture.detectChanges();

    let warningMessage = fixture.debugElement.query(By.css('#settings-warning'));
    let el: HTMLElement = warningMessage.nativeElement
    expect(el).toBeTruthy()
  })

});
